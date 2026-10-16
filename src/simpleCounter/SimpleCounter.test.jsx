import { render, screen } from '@testing-library/react';
import SimpleCounter from './SimpleCounter';
import userEvent from '@testing-library/user-event';

describe('SimpleCounter', () => {
    it('should render the full simple counter page', () => {
        render(<SimpleCounter/>);
        const counter = document.querySelector('p');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('0');
        const buttonPlus = screen.getByRole('button', { name: '+' });
        expect(buttonPlus).toBeInTheDocument();
        const buttonMinus = screen.getByRole('button', { name: '-' });
        expect(buttonMinus).toBeInTheDocument();
    })

    it('should retrive the counter from localStorage if Date < 1 day' , () => {
        localStorage.setItem('SimpleCounter', 10);
        localStorage.setItem('Date', Date.now());
        const user = userEvent.setup();
        render(<SimpleCounter/>);
        let counter = document.querySelector('p');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('10');
    });

    it("shouldn't retrive the counter from localStorage if Date > 1 day" , () => {
        localStorage.setItem('SimpleCounter', 10);
        localStorage.setItem('Date', new Date(Date.now() - (25 * 60 * 60 * 1000)));
        const user = userEvent.setup();
        render(<SimpleCounter/>);
        let counter = document.querySelector('p');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('0');
    });

    it('should increment counter when you click in add button', async () => {
        const user = userEvent.setup();
        render(<SimpleCounter/>);
        let counter = document.querySelector('p');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('0');
        const button = screen.getByRole('button', { name: '+' });
        await user.click(button);
        counter = document.querySelector('p');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('1');
        await user.click(button);
        counter = document.querySelector('p');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('2');
        await user.click(button);
        await user.click(button);
        await user.click(button);
        await user.click(button);
        counter = document.querySelector('p');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('6');
    });

    it('should decrement counter when you click in quit button', async () =>{
        localStorage.setItem('SimpleCounter', 10);
        localStorage.setItem('Date', Date.now());
        const user = userEvent.setup();
        render(<SimpleCounter/>);
        let counter = document.querySelector('p');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('10');
        const button = screen.getByRole('button', { name: '-' });
        await user.click(button);
        counter = document.querySelector('p');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('9');
        await user.click(button);
        counter = document.querySelector('p');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('8');
        await user.click(button);
        await user.click(button);
        await user.click(button);
        await user.click(button);
        counter = document.querySelector('p');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveTextContent('4');
    });
});