import {
    act,
    fireEvent,
    render,
    renderHook,
    screen,
  } from '@testing-library/react';
import { CouponsTable } from '@/components/CommercialTable';
import { COUPONS_ARRAY, CouponsTableFunctionsMock, DELETE_TITLE, EDIT_TITLE, MT_MSG_COUPONS } from '@/Mocks/CommercialTable.mock';

  describe('CouponsTable', () => {
    it('should be render with coupons ', () => {
      const functionsClass=new  CouponsTableFunctionsMock();

      act(() => {
        render(
            <CouponsTable
            elements={COUPONS_ARRAY}
            setOpenEdit={functionsClass.setOpenEditModal}
            setIdToEdit={functionsClass.setIdCouponToEdit}
            setIdToDelete={functionsClass.setIdCouponToDelete}
          />
        );
      });
      expect(JSON.stringify(screen.findByText(MT_MSG_COUPONS))).toBe("{}");
    });

    it('should be render empty ', () => {
      const functionsClass=new  CouponsTableFunctionsMock();

      act(() => {
        render(
            <CouponsTable
            elements={[]}
            setOpenEdit={functionsClass.setOpenEditModal}
            setIdToEdit={functionsClass.setIdCouponToEdit}
            setIdToDelete={functionsClass.setIdCouponToDelete}
          />
        );
      });
      const element=screen.getByText(MT_MSG_COUPONS)
      expect(element).toBeInTheDocument();
    });

    it('should call edit functions ', () => {
      const functionsClass=new  CouponsTableFunctionsMock();
      const editSpy= jest.spyOn(functionsClass,"setOpenEditModal")
      const editIdSpy= jest.spyOn(functionsClass,"setIdCouponToEdit")
      act(() => {
        render(
            <CouponsTable
            elements={COUPONS_ARRAY}
            setOpenEdit={functionsClass.setOpenEditModal}
            setIdToEdit={functionsClass.setIdCouponToEdit}
            setIdToDelete={functionsClass.setIdCouponToDelete}
          />
        );
      });

      const editBtn= screen.getByTitle(EDIT_TITLE)
      fireEvent.click(editBtn)


      expect(editSpy).toHaveBeenCalled();

      expect(editIdSpy).toHaveBeenCalled();
    });

    it('should call delete function ', () => {
      const functionsClass=new  CouponsTableFunctionsMock();
      const deleteSpy= jest.spyOn(functionsClass,"setIdCouponToDelete")
      act(() => {
        render(
            <CouponsTable
            elements={COUPONS_ARRAY}
            setOpenEdit={functionsClass.setOpenEditModal}
            setIdToEdit={functionsClass.setIdCouponToEdit}
            setIdToDelete={functionsClass.setIdCouponToDelete}
          />
        );
      });

      const editBtn= screen.getByTitle(DELETE_TITLE)
      fireEvent.click(editBtn)

      expect(deleteSpy).toHaveBeenCalled();
    });
  });
  