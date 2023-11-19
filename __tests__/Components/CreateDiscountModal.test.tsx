import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from '@testing-library/react';
import { CreateDiscountModal } from '@/components/CreateModal';
import {
  CREATE_DISCOUNT_TITLE,
  CreateModalFunctions,
} from '@/Mocks/CreateModel.Mock';
import { COMMERCIAL_CONSTANTS } from '@/constants/commercial';
const CITY_OPTIONS = COMMERCIAL_CONSTANTS.regions;
const USER_TYPE_OPTIONS = COMMERCIAL_CONSTANTS.userTypes;
describe('CreateDiscountModal', () => {
  it('should be render ', () => {
    const functionsClass = new CreateModalFunctions();

    act(() => {
      render(
        <CreateDiscountModal
          open={true}
          setOpen={functionsClass.setOpenCreateModal}
          handleCreate={functionsClass.handleCreate}
          regionOptions={CITY_OPTIONS}
          userTypeOptions={USER_TYPE_OPTIONS}
        />
      );
    });
    const title = screen.getByText(CREATE_DISCOUNT_TITLE);
    expect(title).toBeInTheDocument();
  });

  it('should call handle create ', async () => {
    const functionsClass = new CreateModalFunctions();
    const handleCreateSpy = jest.spyOn(functionsClass, 'handleCreate');

    act(() => {
      render(
        <CreateDiscountModal
          open={true}
          setOpen={functionsClass.setOpenCreateModal}
          handleCreate={functionsClass.handleCreate}
          regionOptions={CITY_OPTIONS}
          userTypeOptions={USER_TYPE_OPTIONS}
        />
      );
    });
    const title = screen.getByText(CREATE_DISCOUNT_TITLE);

    const nameInput = await screen.getByPlaceholderText(
      'Nombre de la promoción'
    );
    const descriptionInput = await screen.getByPlaceholderText(
      'Descripción de la promoción'
    );
    const valueInput = await screen.getByTestId('discountValue');
    const minValInput = await screen.getByTestId('minValue');
    const validDateStr = await screen.getByTestId('startDate');
    const validDateEnd = await screen.getByTestId('endDate');
    fireEvent.change(nameInput, 'test');
    fireEvent.change(descriptionInput, 'test');
    fireEvent.change(valueInput, 1);
    fireEvent.change(minValInput, 5);
    fireEvent.change(validDateStr, { target: { value: new Date(Date.now()) } });
    fireEvent.change(validDateEnd, {
      target: { value: new Date(Date.now() + 8.64e7) },
    });

    const createBtn =  screen.getByText('Crear');

    fireEvent.click(createBtn);

    expect(title).toBeInTheDocument();
    
  });
  it('should call handle cancel ', async () => {
    const functionsClass = new CreateModalFunctions();
    const openSpy = jest.spyOn(functionsClass, 'setOpenCreateModal');

    act(() => {
      render(
        <CreateDiscountModal
          open={true}
          setOpen={functionsClass.setOpenCreateModal}
          handleCreate={functionsClass.handleCreate}
          regionOptions={CITY_OPTIONS}
          userTypeOptions={USER_TYPE_OPTIONS}
        />
      );
    });
    const title = screen.getByText(CREATE_DISCOUNT_TITLE);

    const createBtn =  screen.getByText('Cancelar');

    fireEvent.click(createBtn);

    expect(title).toBeInTheDocument();
    expect(openSpy).toHaveBeenCalled();
  });
});
