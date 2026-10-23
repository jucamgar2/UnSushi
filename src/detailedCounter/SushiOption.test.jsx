import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SushiOption from './SushiOption';

describe('SushiOption', () => {
    it('should show the sushi option image', () => {
        render(<SushiOption imageSrc={'maki.png'} alt={'Maki'}/>);
        const image = screen.getByRole('img', { alt: 'Maki'});
        expect(image).toBeInTheDocument();
    });

    it('shold executhe the correc add callback funtion', async () => {
        const callback = jest.fn();
        const user = userEvent.setup();
        render(<SushiOption addCallback={callback}/>);
        const button = screen.getByRole('button', { name: '+' });
        await user.click(button);
        expect(callback).toHaveBeenCalledTimes(1);
    })

    it('shold executhe the correc quit callback funtion', async () => {
        const callback = jest.fn();
        const user = userEvent.setup();
        render(<SushiOption quitCallback={callback}/>);
        const button = screen.getByRole('button', { name: '-' });
        await user.click(button);
        expect(callback).toHaveBeenCalledTimes(1);
    })
});
