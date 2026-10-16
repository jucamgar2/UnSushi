import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuitButton from './QuitButton';

describe('QuitButton', () => {
    it('should show the - symbol', () => {
    const callback = jest.fn();
        render(<QuitButton callback={callback} />);
        const button = screen.getByRole('button', { name: '-' });
        expect(button).toBeInTheDocument();
    });

    it('should execute the callback on click', async () => {
        const callback = jest.fn();
        const user = userEvent.setup();
        render(<QuitButton callback={callback} />);
        const button = screen.getByRole('button', { name: '-' });
        await user.click(button);
        expect(callback).toHaveBeenCalledTimes(1);
    });

});