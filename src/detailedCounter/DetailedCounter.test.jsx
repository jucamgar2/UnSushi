import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DetailedCounter from './DetailedCounter';

describe('SushiOption', () => {
    it('should render the full detailed counter page', () => {
        render(<DetailedCounter/>);
        const counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('0');
        const makis = document.getElementById('Maki');
        expect(makis).toBeInTheDocument();
        const uramakis = document.getElementById('Uramaki');
        expect(uramakis).toBeInTheDocument();
        const niguiris = document.getElementById('Niguiri');
        expect(niguiris).toBeInTheDocument();
        const temakis = document.getElementById('Temaki');
        expect(temakis).toBeInTheDocument();
        const bao = document.getElementById('Bao');
        expect(bao).toBeInTheDocument();
        const others = document.getElementById('Other');
        expect(others).toBeInTheDocument();
    })

    it('should retrieve the initial state', () => {
        localStorage.setItem('Date', new Date());
        const detailedCounter = {
            counter:17,
            maki:5,
            uramaki:3,
            niguiri:3,
            temaki:2,
            bao:1,
            other:1
        }
        localStorage.setItem('DetailedCounter', JSON.stringify(detailedCounter));
        render(<DetailedCounter/>);
        const makis = document.getElementById('Maki');
        const makisCount = makis.querySelector('p');
        expect(makisCount).toBeInTheDocument();
        expect(makisCount).toHaveTextContent('5');
        const uramakis = document.getElementById('Uramaki');
        const uramakisCount = uramakis.querySelector('p');
        expect(uramakisCount).toBeInTheDocument();
        expect(uramakisCount).toHaveTextContent('3');
        const niguiris = document.getElementById('Niguiri');
        const niguirisCount = niguiris.querySelector('p');
        expect(niguirisCount).toBeInTheDocument();
        expect(niguirisCount).toHaveTextContent('3');
        const temakis = document.getElementById('Temaki');
        const temakisCount = temakis.querySelector('p');
        expect(temakisCount).toBeInTheDocument();
        expect(temakisCount).toHaveTextContent('2');
        const baos = document.getElementById('Bao');
        const baosCount = baos.querySelector('p');
        expect(baosCount).toBeInTheDocument();
        expect(baosCount).toHaveTextContent('1');
        const others = document.getElementById('Other');
        const othersCount = others.querySelector('p');
        expect(othersCount).toBeInTheDocument();
        expect(othersCount).toHaveTextContent('1');
    });

    it('should discard a corrupt initial state', () => {
        localStorage.setItem('Date', new Date());
        const detailedCounter = {
            counter:17,
            maki:5,
            uramaki:3,
            niguiri:3,
            temaki:2,
            bao:1,
            other:1
        }
        localStorage.setItem('DetailedCounter', detailedCounter);
        render(<DetailedCounter/>);
        const makis = document.getElementById('Maki');
        const makisCount = makis.querySelector('p');
        expect(makisCount).toBeInTheDocument();
        expect(makisCount).toHaveTextContent('0');
        const uramakis = document.getElementById('Uramaki');
        const uramakisCount = uramakis.querySelector('p');
        expect(uramakisCount).toBeInTheDocument();
        expect(uramakisCount).toHaveTextContent('0');
        const niguiris = document.getElementById('Niguiri');
        const niguirisCount = niguiris.querySelector('p');
        expect(niguirisCount).toBeInTheDocument();
        expect(niguirisCount).toHaveTextContent('0');
        const temakis = document.getElementById('Temaki');
        const temakisCount = temakis.querySelector('p');
        expect(temakisCount).toBeInTheDocument();
        expect(temakisCount).toHaveTextContent('0');
        const baos = document.getElementById('Bao');
        const baosCount = baos.querySelector('p');
        expect(baosCount).toBeInTheDocument();
        expect(baosCount).toHaveTextContent('0');
        const others = document.getElementById('Other');
        const othersCount = others.querySelector('p');
        expect(othersCount).toBeInTheDocument();
        expect(othersCount).toHaveTextContent('0');
    });

    it("shouldn't retrive the counter from localStorage if Date > 1 day" , () => {
        localStorage.setItem('Date', new Date(Date.now() - (25 * 60 * 60 * 1000)));
        const detailedCounter = {
            counter:17,
            maki:5,
            uramaki:3,
            niguiri:3,
            temaki:2,
            bao:1,
            other:1
        }
        localStorage.setItem('DetailedCounter', detailedCounter);
        render(<DetailedCounter/>);
        const makis = document.getElementById('Maki');
        const makisCount = makis.querySelector('p');
        expect(makisCount).toBeInTheDocument();
        expect(makisCount).toHaveTextContent('0');
        const uramakis = document.getElementById('Uramaki');
        const uramakisCount = uramakis.querySelector('p');
        expect(uramakisCount).toBeInTheDocument();
        expect(uramakisCount).toHaveTextContent('0');
        const niguiris = document.getElementById('Niguiri');
        const niguirisCount = niguiris.querySelector('p');
        expect(niguirisCount).toBeInTheDocument();
        expect(niguirisCount).toHaveTextContent('0');
        const temakis = document.getElementById('Temaki');
        const temakisCount = temakis.querySelector('p');
        expect(temakisCount).toBeInTheDocument();
        expect(temakisCount).toHaveTextContent('0');
        const baos = document.getElementById('Bao');
        const baosCount = baos.querySelector('p');
        expect(baosCount).toBeInTheDocument();
        expect(baosCount).toHaveTextContent('0');
        const others = document.getElementById('Other');
        const othersCount = others.querySelector('p');
        expect(othersCount).toBeInTheDocument();
        expect(othersCount).toHaveTextContent('0');
    });

    it("should aument counter and maki when we pulse add",async () => {
        render(<DetailedCounter/>);
        const user = userEvent.setup();
        let makis = document.getElementById('Maki');
        let makisCount = makis.querySelector('p');
        expect(makisCount).toBeInTheDocument();
        expect(makisCount).toHaveTextContent('0');
        let buttons = makis.querySelectorAll('button');
        let addButton = Array.from(buttons).find(
            button => button.textContent.trim() === '+'
        );
        await user.click(addButton);
        let counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('1');
        makisCount = makis.querySelector('p');
        expect(makisCount).toBeInTheDocument();
        expect(makisCount).toHaveTextContent('1');
        await user.click(addButton);
        await user.click(addButton);
        await user.click(addButton);
        counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('4');
        makisCount = makis.querySelector('p');
        expect(makisCount).toBeInTheDocument();
        expect(makisCount).toHaveTextContent('4');
    })

    it("should decrement counter and maki when we pulse quit",async () => {
        localStorage.setItem('Date', new Date());
        const detailedCounter = {
            counter:17,
            maki:5,
            uramaki:3,
            niguiri:3,
            temaki:2,
            bao:1,
            other:1
        }
        localStorage.setItem('DetailedCounter', JSON.stringify(detailedCounter));
        render(<DetailedCounter/>);
        const user = userEvent.setup();
        let makis = document.getElementById('Maki');
        let makisCount = makis.querySelector('p');
        expect(makisCount).toBeInTheDocument();
        expect(makisCount).toHaveTextContent('5');
        let buttons = makis.querySelectorAll('button');
        let quitButton = Array.from(buttons).find(
            button => button.textContent.trim() === '-'
        );
        await user.click(quitButton);
        let counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('16');
        makisCount = makis.querySelector('p');
        expect(makisCount).toBeInTheDocument();
        expect(makisCount).toHaveTextContent('4');
        await user.click(quitButton);
        await user.click(quitButton);
        await user.click(quitButton);
        counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('13');
        makisCount = makis.querySelector('p');
        expect(makisCount).toBeInTheDocument();
        expect(makisCount).toHaveTextContent('1');
    })

    it("shouldn't decrement counter and maki when we pulse quit and there are 0",async () => {
        localStorage.setItem('Date', new Date());
        const detailedCounter = {
            counter:12,
            maki:0,
            uramaki:3,
            niguiri:3,
            temaki:2,
            bao:1,
            other:1
        }
        localStorage.setItem('DetailedCounter', JSON.stringify(detailedCounter));
        render(<DetailedCounter/>);
        const user = userEvent.setup();
        let makis = document.getElementById('Maki');
        let makisCount = makis.querySelector('p');
        expect(makisCount).toBeInTheDocument();
        expect(makisCount).toHaveTextContent('0');
        let buttons = makis.querySelectorAll('button');
        let quitButton = Array.from(buttons).find(
            button => button.textContent.trim() === '-'
        );
        await user.click(quitButton);
        let counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('12');
        makisCount = makis.querySelector('p');
        expect(makisCount).toBeInTheDocument();
        expect(makisCount).toHaveTextContent('0');
        await user.click(quitButton);
        await user.click(quitButton);
        await user.click(quitButton);
        counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('12');
        makisCount = makis.querySelector('p');
        expect(makisCount).toBeInTheDocument();
        expect(makisCount).toHaveTextContent('0');
    })

    it("should aument counter and uramaki when we pulse add",async () => {
        localStorage.removeItem('Date');
        localStorage.removeItem('DetailedCounter');
        render(<DetailedCounter/>);
        const user = userEvent.setup();
        let uramakis = document.getElementById('Uramaki');
        let uramakisCount = uramakis.querySelector('p');
        expect(uramakisCount).toBeInTheDocument();
        expect(uramakisCount).toHaveTextContent('0');
        let buttons = uramakis.querySelectorAll('button');
        let addButton = Array.from(buttons).find(
            button => button.textContent.trim() === '+'
        );
        await user.click(addButton);
        let counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('1');
        uramakisCount = uramakis.querySelector('p');
        expect(uramakisCount).toBeInTheDocument();
        expect(uramakisCount).toHaveTextContent('1');
        await user.click(addButton);
        await user.click(addButton);
        await user.click(addButton);
        counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('4');
        uramakisCount = uramakis.querySelector('p');
        expect(uramakisCount).toBeInTheDocument();
        expect(uramakisCount).toHaveTextContent('4');
    })

    it("should decrement counter and uramaki when we pulse quit",async () => {
        localStorage.setItem('Date', new Date());
        const detailedCounter = {
            counter:17,
            maki:5,
            uramaki:3,
            niguiri:3,
            temaki:2,
            bao:1,
            other:1
        }
        localStorage.setItem('DetailedCounter', JSON.stringify(detailedCounter));
        render(<DetailedCounter/>);
        const user = userEvent.setup();
        let uramakis = document.getElementById('Uramaki');
        let uramakisCount = uramakis.querySelector('p');
        expect(uramakisCount).toBeInTheDocument();
        expect(uramakisCount).toHaveTextContent('3');
        let buttons = uramakis.querySelectorAll('button');
        let quitButton = Array.from(buttons).find(
            button => button.textContent.trim() === '-'
        );
        await user.click(quitButton);
        let counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('16');
        uramakisCount = uramakis.querySelector('p');
        expect(uramakisCount).toBeInTheDocument();
        expect(uramakisCount).toHaveTextContent('2');
        await user.click(quitButton);
        await user.click(quitButton);
        counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('14');
        uramakisCount = uramakis.querySelector('p');
        expect(uramakisCount).toBeInTheDocument();
        expect(uramakisCount).toHaveTextContent('0');
    })

    it("shouldn't decrement counter and uramaki when we pulse quit and there are 0",async () => {
        localStorage.setItem('Date', new Date());
        const detailedCounter = {
            counter:12,
            maki:3,
            uramaki:0,
            niguiri:3,
            temaki:2,
            bao:1,
            other:1
        }
        localStorage.setItem('DetailedCounter', JSON.stringify(detailedCounter));
        render(<DetailedCounter/>);
        const user = userEvent.setup();
        let uramaki = document.getElementById('Uramaki');
        let uramakisCount = uramaki.querySelector('p');
        expect(uramakisCount).toBeInTheDocument();
        expect(uramakisCount).toHaveTextContent('0');
        let buttons = uramaki.querySelectorAll('button');
        let quitButton = Array.from(buttons).find(
            button => button.textContent.trim() === '-'
        );
        await user.click(quitButton);
        let counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('12');
        uramakisCount = uramaki.querySelector('p');
        expect(uramakisCount).toBeInTheDocument();
        expect(uramakisCount).toHaveTextContent('0');
        await user.click(quitButton);
        await user.click(quitButton);
        await user.click(quitButton);
        counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('12');
        uramakisCount = uramaki.querySelector('p');
        expect(uramakisCount).toBeInTheDocument();
        expect(uramakisCount).toHaveTextContent('0');
    })

    it("should aument counter and niguiri when we pulse add",async () => {
        localStorage.removeItem('Date');
        localStorage.removeItem('DetailedCounter');
        render(<DetailedCounter/>);
        const user = userEvent.setup();
        let niguiri = document.getElementById('Niguiri');
        let niguiriCount = niguiri.querySelector('p');
        expect(niguiriCount).toBeInTheDocument();
        expect(niguiriCount).toHaveTextContent('0');
        let buttons = niguiri.querySelectorAll('button');
        let addButton = Array.from(buttons).find(
            button => button.textContent.trim() === '+'
        );
        await user.click(addButton);
        let counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('1');
        niguiriCount = niguiri.querySelector('p');
        expect(niguiriCount).toBeInTheDocument();
        expect(niguiriCount).toHaveTextContent('1');
        await user.click(addButton);
        await user.click(addButton);
        await user.click(addButton);
        counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('4');
        niguiriCount = niguiri.querySelector('p');
        expect(niguiriCount).toBeInTheDocument();
        expect(niguiriCount).toHaveTextContent('4');
    })

    it("should decrement counter and niguiri when we pulse quit",async () => {
        localStorage.setItem('Date', new Date());
        const detailedCounter = {
            counter:17,
            maki:5,
            uramaki:3,
            niguiri:3,
            temaki:2,
            bao:1,
            other:1
        }
        localStorage.setItem('DetailedCounter', JSON.stringify(detailedCounter));
        render(<DetailedCounter/>);
        const user = userEvent.setup();
        let niguiri = document.getElementById('Niguiri');
        let niguiriCount = niguiri.querySelector('p');
        expect(niguiriCount).toBeInTheDocument();
        expect(niguiriCount).toHaveTextContent('3');
        let buttons = niguiri.querySelectorAll('button');
        let quitButton = Array.from(buttons).find(
            button => button.textContent.trim() === '-'
        );
        await user.click(quitButton);
        let counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('16');
        niguiriCount = niguiri.querySelector('p');
        expect(niguiriCount).toBeInTheDocument();
        expect(niguiriCount).toHaveTextContent('2');
        await user.click(quitButton);
        await user.click(quitButton);
        counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('14');
        niguiriCount = niguiri.querySelector('p');
        expect(niguiriCount).toBeInTheDocument();
        expect(niguiriCount).toHaveTextContent('0');
    })

    it("shouldn't decrement counter and niguiri when we pulse quit and there are 0",async () => {
        localStorage.setItem('Date', new Date());
        const detailedCounter = {
            counter:12,
            maki:3,
            uramaki:3,
            niguiri:0,
            temaki:2,
            bao:1,
            other:1
        }
        localStorage.setItem('DetailedCounter', JSON.stringify(detailedCounter));
        render(<DetailedCounter/>);
        const user = userEvent.setup();
        let niguiri = document.getElementById('Niguiri');
        let niguiriCount = niguiri.querySelector('p');
        expect(niguiriCount).toBeInTheDocument();
        expect(niguiriCount).toHaveTextContent('0');
        let buttons = niguiri.querySelectorAll('button');
        let quitButton = Array.from(buttons).find(
            button => button.textContent.trim() === '-'
        );
        await user.click(quitButton);
        let counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('12');
        niguiriCount = niguiri.querySelector('p');
        expect(niguiriCount).toBeInTheDocument();
        expect(niguiriCount).toHaveTextContent('0');
        await user.click(quitButton);
        await user.click(quitButton);
        await user.click(quitButton);
        counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('12');
        niguiriCount = niguiri.querySelector('p');
        expect(niguiriCount).toBeInTheDocument();
        expect(niguiriCount).toHaveTextContent('0');
    })

    it("should aument counter and temaki when we pulse add",async () => {
        localStorage.removeItem('Date');
        localStorage.removeItem('DetailedCounter');
        render(<DetailedCounter/>);
        const user = userEvent.setup();
        let temaki = document.getElementById('Temaki');
        let temakiCount = temaki.querySelector('p');
        expect(temakiCount).toBeInTheDocument();
        expect(temakiCount).toHaveTextContent('0');
        let buttons = temaki.querySelectorAll('button');
        let addButton = Array.from(buttons).find(
            button => button.textContent.trim() === '+'
        );
        await user.click(addButton);
        let counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('1.5');
        temakiCount = temaki.querySelector('p');
        expect(temakiCount).toBeInTheDocument();
        expect(temakiCount).toHaveTextContent('1');
        await user.click(addButton);
        await user.click(addButton);
        await user.click(addButton);
        counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('6');
        temakiCount = temaki.querySelector('p');
        expect(temakiCount).toBeInTheDocument();
        expect(temakiCount).toHaveTextContent('4');
    })

    it("should decrement counter and temaki when we pulse quit",async () => {
        localStorage.setItem('Date', new Date());
        const detailedCounter = {
            counter:17,
            maki:5,
            uramaki:3,
            niguiri:3,
            temaki:2,
            bao:1,
            other:1
        }
        localStorage.setItem('DetailedCounter', JSON.stringify(detailedCounter));
        render(<DetailedCounter/>);
        const user = userEvent.setup();
        let temaki = document.getElementById('Temaki');
        let temakiCount = temaki.querySelector('p');
        expect(temakiCount).toBeInTheDocument();
        expect(temakiCount).toHaveTextContent('2');
        let buttons = temaki.querySelectorAll('button');
        let quitButton = Array.from(buttons).find(
            button => button.textContent.trim() === '-'
        );
        await user.click(quitButton);
        let counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('15.5');
        temakiCount = temaki.querySelector('p');
        expect(temakiCount).toBeInTheDocument();
        expect(temakiCount).toHaveTextContent('1');
        await user.click(quitButton);
        counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('14');
        temakiCount = temaki.querySelector('p');
        expect(temakiCount).toBeInTheDocument();
        expect(temakiCount).toHaveTextContent('0');
    })

    it("shouldn't decrement counter and temaki when we pulse quit and there are 0", async () => {
        localStorage.setItem('Date', new Date());
        const detailedCounter = {
            counter:12,
            maki:3,
            uramaki:3,
            niguiri:3,
            temaki:0,
            bao:1,
            other:1
        }
        localStorage.setItem('DetailedCounter', JSON.stringify(detailedCounter));
        render(<DetailedCounter/>);
        const user = userEvent.setup();
        let temaki = document.getElementById('Temaki');
        let temakiCount = temaki.querySelector('p');
        expect(temakiCount).toBeInTheDocument();
        expect(temakiCount).toHaveTextContent('0');
        let buttons = temaki.querySelectorAll('button');
        let quitButton = Array.from(buttons).find(
            button => button.textContent.trim() === '-'
        );
        await user.click(quitButton);
        let counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('12');
        temakiCount = temaki.querySelector('p');
        expect(temakiCount).toBeInTheDocument();
        expect(temakiCount).toHaveTextContent('0');
        await user.click(quitButton);
        await user.click(quitButton);
        await user.click(quitButton);
        counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('12');
        temakiCount = temaki.querySelector('p');
        expect(temakiCount).toBeInTheDocument();
        expect(temakiCount).toHaveTextContent('0');
    })

    it("should aument counter and bao when we pulse add",async () => {
        localStorage.removeItem('Date');
        localStorage.removeItem('DetailedCounter');
        render(<DetailedCounter/>);
        const user = userEvent.setup();
        let bao = document.getElementById('Bao');
        let baoCount = bao.querySelector('p');
        expect(baoCount).toBeInTheDocument();
        expect(baoCount).toHaveTextContent('0');
        let buttons = bao.querySelectorAll('button');
        let addButton = Array.from(buttons).find(
            button => button.textContent.trim() === '+'
        );
        await user.click(addButton);
        let counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('2');
        baoCount = bao.querySelector('p');
        expect(baoCount).toBeInTheDocument();
        expect(baoCount).toHaveTextContent('1');
        await user.click(addButton);
        await user.click(addButton);
        await user.click(addButton);
        counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('8');
        baoCount = bao.querySelector('p');
        expect(baoCount).toBeInTheDocument();
        expect(baoCount).toHaveTextContent('4');
    })

    it("should decrement counter and bao when we pulse quit",async () => {
        localStorage.setItem('Date', new Date());
        const detailedCounter = {
            counter:17,
            maki:3,
            uramaki:3,
            niguiri:3,
            temaki:2,
            bao:2,
            other:1
        }
        localStorage.setItem('DetailedCounter', JSON.stringify(detailedCounter));
        render(<DetailedCounter/>);
        const user = userEvent.setup();
        let bao = document.getElementById('Bao');
        let baoCount = bao.querySelector('p');
        expect(baoCount).toBeInTheDocument();
        expect(baoCount).toHaveTextContent('2');
        let buttons = bao.querySelectorAll('button');
        let quitButton = Array.from(buttons).find(
            button => button.textContent.trim() === '-'
        );
        await user.click(quitButton);
        let counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('15');
        baoCount = bao.querySelector('p');
        expect(baoCount).toBeInTheDocument();
        expect(baoCount).toHaveTextContent('1');
        await user.click(quitButton);
        counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('13');
        baoCount = bao.querySelector('p');
        expect(baoCount).toBeInTheDocument();
        expect(baoCount).toHaveTextContent('0');
    })

    it("shouldn't decrement counter and bao when we pulse quit and there are 0", async () => {
        localStorage.setItem('Date', new Date());
        const detailedCounter = {
            counter:12,
            maki:3,
            uramaki:3,
            niguiri:2,
            temaki:2,
            bao:0,
            other:1
        }
        localStorage.setItem('DetailedCounter', JSON.stringify(detailedCounter));
        render(<DetailedCounter/>);
        const user = userEvent.setup();
        let bao = document.getElementById('Bao');
        let baoCount = bao.querySelector('p');
        expect(baoCount).toBeInTheDocument();
        expect(baoCount).toHaveTextContent('0');
        let buttons = bao.querySelectorAll('button');
        let quitButton = Array.from(buttons).find(
            button => button.textContent.trim() === '-'
        );
        await user.click(quitButton);
        let counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('12');
        baoCount = bao.querySelector('p');
        expect(baoCount).toBeInTheDocument();
        expect(baoCount).toHaveTextContent('0');
        await user.click(quitButton);
        await user.click(quitButton);
        await user.click(quitButton);
        counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('12');
        baoCount = bao.querySelector('p');
        expect(baoCount).toBeInTheDocument();
        expect(baoCount).toHaveTextContent('0');
    })

    it("should aument counter and other when we pulse add",async () => {
        localStorage.removeItem('Date');
        localStorage.removeItem('DetailedCounter');
        render(<DetailedCounter/>);
        const user = userEvent.setup();
        let other = document.getElementById('Other');
        let otherCount = other.querySelector('p');
        expect(otherCount).toBeInTheDocument();
        expect(otherCount).toHaveTextContent('0');
        let buttons = other.querySelectorAll('button');
        let addButton = Array.from(buttons).find(
            button => button.textContent.trim() === '+'
        );
        await user.click(addButton);
        let counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('1');
        otherCount = other.querySelector('p');
        expect(otherCount).toBeInTheDocument();
        expect(otherCount).toHaveTextContent('1');
        await user.click(addButton);
        await user.click(addButton);
        await user.click(addButton);
        counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('4');
        otherCount = other.querySelector('p');
        expect(otherCount).toBeInTheDocument();
        expect(otherCount).toHaveTextContent('4');
    })

    it("should decrement counter and other when we pulse quit",async () => {
        localStorage.setItem('Date', new Date());
        const detailedCounter = {
            counter:17,
            maki:2,
            uramaki:3,
            niguiri:3,
            temaki:2,
            bao:2,
            other:2
        }
        localStorage.setItem('DetailedCounter', JSON.stringify(detailedCounter));
        render(<DetailedCounter/>);
        const user = userEvent.setup();
        let other = document.getElementById('Other');
        let otherCount = other.querySelector('p');
        expect(otherCount).toBeInTheDocument();
        expect(otherCount).toHaveTextContent('2');
        let buttons = other.querySelectorAll('button');
        let quitButton = Array.from(buttons).find(
            button => button.textContent.trim() === '-'
        );
        await user.click(quitButton);
        let counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('16');
        otherCount = other.querySelector('p');
        expect(otherCount).toBeInTheDocument();
        expect(otherCount).toHaveTextContent('1');
        await user.click(quitButton);
        counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('15');
        otherCount = other.querySelector('p');
        expect(otherCount).toBeInTheDocument();
        expect(otherCount).toHaveTextContent('0');
    })

    it("shouldn't decrement counter and other when we pulse quit and there are 0", async () => {
        localStorage.setItem('Date', new Date());
        const detailedCounter = {
            counter:12,
            maki:3,
            uramaki:3,
            niguiri:2,
            temaki:2,
            bao:1,
            other:0
        }
        localStorage.setItem('DetailedCounter', JSON.stringify(detailedCounter));
        render(<DetailedCounter/>);
        const user = userEvent.setup();
        let other = document.getElementById('Other');
        let otherCount = other.querySelector('p');
        expect(otherCount).toBeInTheDocument();
        expect(otherCount).toHaveTextContent('0');
        let buttons = other.querySelectorAll('button');
        let quitButton = Array.from(buttons).find(
            button => button.textContent.trim() === '-'
        );
        await user.click(quitButton);
        let counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('12');
        otherCount = other.querySelector('p');
        expect(otherCount).toBeInTheDocument();
        expect(otherCount).toHaveTextContent('0');
        await user.click(quitButton);
        await user.click(quitButton);
        await user.click(quitButton);
        counter = document.getElementById('detailed-counter');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('12');
        otherCount = other.querySelector('p');
        expect(otherCount).toBeInTheDocument();
        expect(otherCount).toHaveTextContent('0');
    })
});