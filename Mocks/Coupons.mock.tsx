export const COUPON_MOCK = {
  id: '1',
  name: 'test',
  description: 'test',
  startDate: new Date(),
  endDate: new Date(),
  discountPercentage: 60,
  maxDiscount: 60,
  discountValue: 60,
  minValue: 60,
  amount: 1,
  city: 'test',
  amountAvailable: 1,
  status: 'activo',
  userType: 'test',
};

export const getCouponsMock = jest
  .fn()
  .mockResolvedValue({ then: jest.fn().mockReturnValue([COUPON_MOCK]) });
export const createCouponMock = jest
  .fn()
  .mockResolvedValue({ then: jest.fn().mockReturnValue([COUPON_MOCK]) });

export const updateCouponMock = jest
  .fn()
  .mockResolvedValue({ then: jest.fn().mockReturnValue([COUPON_MOCK]) });