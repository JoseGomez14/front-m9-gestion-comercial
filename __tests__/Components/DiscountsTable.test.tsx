import {
    act,
    fireEvent,
    render,
    renderHook,
    screen,
  } from '@testing-library/react';
import { DiscountsTable } from '@/components/CommercialTable';
import { DELETE_TITLE, DISCOUNTS_ARRAY, DiscountsTableFunctionsMock, EDIT_TITLE, MT_MSG_DISCOUNTS, } from '@/Mocks/CommercialTable.mock';

  describe('DiscountsTable', () => {
    it('should be render with coupons ', () => {
      const functionsClass=new  DiscountsTableFunctionsMock();

      act(() => {
        render(
            <DiscountsTable
              elements={DISCOUNTS_ARRAY}
              setIdToEdit={functionsClass.setIdDiscountToEdit}
              setOpenEdit={functionsClass.setOpenEditModal}
              setIdToDelete={functionsClass.setIdDiscountToDelete}
            />
        );
      });
      expect(JSON.stringify(screen.findByText(MT_MSG_DISCOUNTS))).toBe("{}");
    });

    it('should be render empty ', () => {
      const functionsClass=new  DiscountsTableFunctionsMock();

      act(() => {
        render(
            <DiscountsTable
            elements={[]}
            setOpenEdit={functionsClass.setOpenEditModal}
            setIdToEdit={functionsClass.setIdDiscountToEdit}
            setIdToDelete={functionsClass.setIdDiscountToDelete}
          />
        );
      });
      const element=screen.getByText(MT_MSG_DISCOUNTS)
      expect(element).toBeInTheDocument();
    });

    it('should call edit functions ', () => {
      const functionsClass=new  DiscountsTableFunctionsMock();
      const editSpy= jest.spyOn(functionsClass,"setOpenEditModal")
      const editIdSpy= jest.spyOn(functionsClass,"setIdDiscountToEdit")
      act(() => {
        render(
            <DiscountsTable
            elements={DISCOUNTS_ARRAY}
            setOpenEdit={functionsClass.setOpenEditModal}
            setIdToEdit={functionsClass.setIdDiscountToEdit}
            setIdToDelete={functionsClass.setIdDiscountToDelete}
          />
        );
      });

      const editBtn= screen.getByTitle(EDIT_TITLE)
      fireEvent.click(editBtn)


      expect(editSpy).toHaveBeenCalled();

      expect(editIdSpy).toHaveBeenCalled();
    });

    it('should call delete function ', () => {
      const functionsClass=new  DiscountsTableFunctionsMock();
      const deleteSpy= jest.spyOn(functionsClass,"setIdDiscountToDelete")
      act(() => {
        render(
            <DiscountsTable
            elements={DISCOUNTS_ARRAY}
            setOpenEdit={functionsClass.setOpenEditModal}
            setIdToEdit={functionsClass.setIdDiscountToEdit}
            setIdToDelete={functionsClass.setIdDiscountToDelete}
          />
        );
      });

      const editBtn= screen.getByTitle(DELETE_TITLE)
      fireEvent.click(editBtn)

      expect(deleteSpy).toHaveBeenCalled();
    });
  });
  