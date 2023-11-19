import {
    act,
    fireEvent,
    render,
    renderHook,
    screen,
  } from '@testing-library/react';
  import { CreateCouponModal } from '@/components/CreateModal';
  import {
      CREATE_COUPON_TITLE,
    CreateModalFunctions,
  } from '@/Mocks/CreateModel.Mock';
  import { COMMERCIAL_CONSTANTS } from '@/constants/commercial';
  const CITY_OPTIONS = COMMERCIAL_CONSTANTS.regions;
  const USER_TYPE_OPTIONS = COMMERCIAL_CONSTANTS.userTypes;
  describe('CreateCouponModal', () => {
    it('should be render ', () => {
      const functionsClass = new CreateModalFunctions();
  
      act(() => {
        render(
          <CreateCouponModal
            open={true}
            setOpen={functionsClass.setOpenCreateModal}
            handleCreate={functionsClass.handleCreate}
            regionOptions={CITY_OPTIONS}
            userTypeOptions={USER_TYPE_OPTIONS}
          />
        );
      });
      const title = screen.getByText(CREATE_COUPON_TITLE);
      expect(title).toBeInTheDocument();
    });
  
    it('should call handle create ', async () => {
      const functionsClass = new CreateModalFunctions();
  
      act(() => {
        render(
          <CreateCouponModal
            open={true}
            setOpen={functionsClass.setOpenCreateModal}
            handleCreate={functionsClass.handleCreate}
            regionOptions={CITY_OPTIONS}
            userTypeOptions={USER_TYPE_OPTIONS}
          />
        );
      });

      const title = screen.getByText(CREATE_COUPON_TITLE);
        const nameInput= await screen.findByPlaceholderText("Nombre del cupón")
        const descriptionInput=await screen.findByPlaceholderText("Descripción del cupón")
        const valueInput= await screen.findByTestId("discountValue")
        const minValInput= await screen.findByTestId("minValue")
        const validDateStr=await  screen.findByTestId("startDate")
        const validDateEnd=await  screen.findByTestId("endDate")
        const couponAmounInput=await  screen.findByPlaceholderText("Cantidad")

        fireEvent.change( nameInput,"test")
        fireEvent.change( descriptionInput,"test")
        fireEvent.change( valueInput,1)
        fireEvent.change( minValInput,5)
        fireEvent.change( validDateStr,{target: {value: new Date(Date.now())}})
        fireEvent.change( validDateEnd,{target: {value: new Date(Date.now()+ 8.64e+7)}})
        fireEvent.change( couponAmounInput,10)


        const createBtn= await screen.findByText("Crear")

        fireEvent.click(createBtn)
  
      expect(title).toBeInTheDocument();
      
    });
    it('should call handle cancel ', async () => {
      const functionsClass = new CreateModalFunctions();
      const openSpy = jest.spyOn(functionsClass, 'setOpenCreateModal');
  
      act(() => {
        render(
          <CreateCouponModal
            open={true}
            setOpen={functionsClass.setOpenCreateModal}
            handleCreate={functionsClass.handleCreate}
            regionOptions={CITY_OPTIONS}
            userTypeOptions={USER_TYPE_OPTIONS}
          />
        );
      });
      const title = screen.getByText(CREATE_COUPON_TITLE);
  
      const createBtn =  screen.getByText('Cancelar');
  
      fireEvent.click(createBtn);
  
      expect(title).toBeInTheDocument();
      expect(openSpy).toHaveBeenCalled();
    });
  });
  