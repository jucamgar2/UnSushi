import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";
import { realpath } from "node:fs";

const INPUT_DIR = "public";
const OUTPUT_DIR = "public/images-optimized";

const SUPPORTED_FORMATS = new Set([".png"]);

async function optimizeImages() {
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    
    const files = await fs.readdir(INPUT_DIR, {
        withFileTypes: true,
        recursive: true
    });

    let originalCount = 0;
    let optimizedCount = 0;
    let processedCount = 0;

    for(const file of files) {
        if(!file.isFile()) continue;
        const relativePath = path.relative(
            INPUT_DIR,
            path.join(file.parentPath ?? INPUT_DIR, file.name)
        );

        if(!SUPPORTED_FORMATS.has(path.extname(file.name).toLowerCase())) {
            continue;
        }

        const inputPath = path.join(INPUT_DIR, relativePath);
        const outputPath = path.join(OUTPUT_DIR, relativePath.replace(/\.[^.]+$/, ".webp"));
        await fs.mkdir(path.dirname(outputPath), {
            recursive: true
        })

        const original = await fs.stat(inputPath);
        const result = await sharp(inputPath)
            .rotate()
            .resize({
                width: 1920,
                height: 1920,
                fit: "inside",
                withoutEnlargement: true
            })
            .webp({quality: 82, effort: 4})
            .toFile(outputPath);

        originalCount += original.size;
        optimizedCount+= result.size;
        processedCount++;

        const saved = ((1 - result.size / original.size) * 100).toFixed(1);

        console.log( `${relativePath}: ` + `${(original.size / 1024).toFixed(1)} KB -> ` +
                     `${(result.size / 1024).toFixed(1)} KB ` + `(${saved}% de ahorro)`);
    }

    const savings = originalCount ? ((1 - optimizedCount / originalCount) * 100).toFixed(1) : "0.0";
    console.log("\n--- Resumen ---");
    console.log(`Imágenes procesadas: ${processed}`);
    console.log(`Originales: ${(originalTotal / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Optimizadas: ${(optimizedTotal / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Reducción total: ${savings}%`);
}

optimizeImages().catch(console.error);