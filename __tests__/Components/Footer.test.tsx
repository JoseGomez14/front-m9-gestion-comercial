import { Footer } from '@/components/common/footer';
import {
    act,
    render,
    screen,
  } from '@testing-library/react';
  describe('footer', () => {
    it('should be render ', () => {
      act(() => {
        render(
            <Footer />
        );
      });

      const element= screen.getByText("Condiciones")

      expect(element).toBeInTheDocument();
    });
  });
  