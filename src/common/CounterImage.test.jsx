import { render, screen } from '@testing-library/react';
import CounterImage from './CounterImage';

describe('CounterImage', () => {
    it('should show the image size 1', () => {
        render(<CounterImage count={3}/>);
        const image = screen.getByRole('img', { alt: 'Sushi size 1'});
        expect(image).toBeInTheDocument();
    });

    it('should show the image size 2', () => {
        render(<CounterImage count={11}/>);
        const image = screen.getByRole('img', { alt: 'Sushi size 2'});
        expect(image).toBeInTheDocument();
    });

    it('should show the image size 3', () => {
        render(<CounterImage count={17}/>);
        const image = screen.getByRole('img', { alt: 'Sushi size 3'});
        expect(image).toBeInTheDocument();
    });

    it('should show the image size 4', () => {
        render(<CounterImage count={24}/>);
        const image = screen.getByRole('img', { alt: 'Sushi size 4'});
        expect(image).toBeInTheDocument();
    });

    it('should show the image size 5', () => {
        render(<CounterImage count={33}/>);
        const image = screen.getByRole('img', { alt: 'Sushi size 5'});
        expect(image).toBeInTheDocument();
    });

    it('should show the image size 6', () => {
        render(<CounterImage count={41}/>);
        const image = screen.getByRole('img', { alt: 'Sushi size 6'});
        expect(image).toBeInTheDocument();
    });

    it('should show the image size 7', () => {
        render(<CounterImage count={57}/>);
        const image = screen.getByRole('img', { alt: 'Sushi size 7'});
        expect(image).toBeInTheDocument();
    });

    it('should show the image size 8', () => {
        render(<CounterImage count={64}/>);
        const image = screen.getByRole('img', { alt: 'Sushi size 8'});
        expect(image).toBeInTheDocument();
    });

    it('should show the image size 9', () => {
        render(<CounterImage count={73}/>);
        const image = screen.getByRole('img', { alt: 'Sushi size 9'});
        expect(image).toBeInTheDocument();
    });
    
})