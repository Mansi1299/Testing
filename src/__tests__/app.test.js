import { fireEvent, render } from "@testing-library/react"
import IncDecCounter from "../ IncDecCounter"

describe(("component counter test"),()=>{
    test("should component render",()=>{
        const data=render(<IncDecCounter/>)
        expect(data).toMatchSnapshot()
    })
    test("should button click",()=>{
        const data=render(<IncDecCounter/>)
        let btn=data.getByTestId("button")
        expect(btn).toBeInTheDocument()
        // 
        

    })
    test("should button  in click",()=>{
        const data=render(<IncDecCounter/>)
        let btn=data.getByTestId("buttonmy")
        expect(btn).toBeInTheDocument()
        // 
        

    })
})