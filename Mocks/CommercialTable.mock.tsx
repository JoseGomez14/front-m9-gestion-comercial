import { COUPON_MOCK } from "./Coupons.mock";
import { DISCOUNT_MOCK } from "./Discounts.mock";

export const COUPONS_ARRAY=[
    COUPON_MOCK
]

export const DISCOUNTS_ARRAY=[
    DISCOUNT_MOCK
]

export class CouponsTableFunctionsMock{
    setOpenEditModal=jest.fn();
    setIdCouponToEdit=jest.fn();
    setIdCouponToDelete=jest.fn();
}

export class DiscountsTableFunctionsMock{
    setOpenEditModal=jest.fn();
    setIdDiscountToEdit=jest.fn();
    setIdDiscountToDelete=jest.fn();
}

export const MT_MSG_COUPONS="No hay cupones registrados"

export const MT_MSG_DISCOUNTS="No hay promociones registradas" 

export const EDIT_TITLE="Editar"

export const DELETE_TITLE="Eliminar"