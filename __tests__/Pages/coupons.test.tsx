import {act, fireEvent, render, renderHook, screen} from "@testing-library/react"
import Coupons from "@/pages/coupons"
import { createCoupon} from "@/services/commercialApi"
import { useFetch } from "@/hooks/useFetch"
import { COUPON_MOCK } from "@/Mocks/Coupons.mock"


jest.mock("@/hooks/useFetch")
jest.mock("@/services/commercialApi")
describe("Coupons",()=>{
    it("should be render ",()=>{
        act(()=>{
            useFetch.mockResolvedValue([])
            render(<Coupons/>)
        })
    
        const element= screen.getByText("Cupones");
    
        expect(element).toBeInTheDocument();
    })

    it("should create a new Coupon ",async ()=>{
        act(()=>{

            createCoupon.mockResolvedValue(COUPON_MOCK)
            useFetch.mockResolvedValue([COUPON_MOCK])
            render(<Coupons/>)

        })

        
        const element= screen.getByText("Nuevo Cupón +");

        fireEvent.click(element);
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

        expect(JSON.stringify(screen.findByPlaceholderText("Nombre del cupón"))).toBe("{}");

    })
})