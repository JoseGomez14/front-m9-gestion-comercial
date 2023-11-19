import Discounts from "@/pages/discounts"
import {act, render, screen} from "@testing-library/react"
import { useFetch } from "@/hooks/useFetch"

jest.mock("@/hooks/useFetch")
it("should be render",()=>{
    act(()=>{
        useFetch.mockResolvedValue([])
        render(<Discounts/>)
    })

    const element= screen.getByText("Promociones");

    expect(element).toBeInTheDocument();
})