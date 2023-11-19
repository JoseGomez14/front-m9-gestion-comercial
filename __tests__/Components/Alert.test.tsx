import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from '@testing-library/react';
import { useFetch } from '@/hooks/useFetch';
import { Alert } from '@/components/alerts';
import { MSG_TEST, SERVERITIES, setConfirmationMock, setOpenMock } from '@/Mocks/Alert.mock';

jest.mock('@/hooks/useFetch');
jest.mock('@/services/commercialApi');
describe('Alert', () => {
  it('should be render success ', () => {
    act(() => {
      render(
        <Alert
          severity={SERVERITIES.SUCCESS as 'success' | 'error' | 'info' | 'confirm'}
          open={true}
          setOpen={setOpenMock}
          setConfirm={setConfirmationMock}
        >
          <p>{MSG_TEST}</p>
        </Alert>
      );
    });

    const element = screen.getByText(MSG_TEST);

    expect(element).toBeInTheDocument();
  });

  it('should be render error ', () => {
    act(() => {
      render(
        <Alert
          severity={SERVERITIES.ERROR as 'success' | 'error' | 'info' | 'confirm'}
          open={true}
          setOpen={setOpenMock}
          setConfirm={setConfirmationMock}
        >
          <p>{MSG_TEST}</p>
        </Alert>
      );
    });

    const element = screen.getByText(MSG_TEST);

    expect(element).toBeInTheDocument();
  });

  it('should be render info ', () => {
    act(() => {
      render(
        <Alert
          severity={SERVERITIES.INFOR as 'success' | 'error' | 'info' | 'confirm'}
          open={true}
          setOpen={setOpenMock}
          setConfirm={setConfirmationMock}
        >
          <p>{MSG_TEST}</p>
        </Alert>
      );
    });

    const element = screen.getByText(MSG_TEST);

    expect(element).toBeInTheDocument();
  });

  it('should be render confirm ', () => {
    act(() => {
      render(
        <Alert
          severity={SERVERITIES.CONFIRM as 'success' | 'error' | 'info' | 'confirm'}
          open={true}
          setOpen={setOpenMock}
          setConfirm={setConfirmationMock}
        >
          <p>{MSG_TEST}</p>
        </Alert>
      );
    });

    const element = screen.getByText(MSG_TEST);
    const confirmBtn = screen.getByText('Confirmar')
    const cancelBtn= screen.getByText('Cancelar')

    expect(element).toBeInTheDocument();
    expect(confirmBtn).toBeInTheDocument();
    expect(cancelBtn).toBeInTheDocument();
  });

  
});
