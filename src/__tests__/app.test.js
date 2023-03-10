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
    })
    test("should button  in click",()=>{
        const data=render(<IncDecCounter/>)
        let btn=data.getByTestId("valid-form")
        expect(btn).toBeVisible()
    })
    test("should button  in a wclick",()=>{
        const data=render(<IncDecCounter/>)
        let btn=data.getByTestId("valid-form")
        expect(btn).toHaveStyle('margin:20px')
        // expect(btn).toHaveStyle({margin: '20px'})
    })
    test("should button  dincrement",()=>{
        const data=render(<IncDecCounter/>)
        let btn=data.getByTestId("valid-form")
        let called=fireEvent.click(btn)
        expect(called).toBeTruthy()
       console.log(btn.value,"value",called)

       // expect(btn).toHaveStyle('margin:20px')
        // expect(btn).toHaveStyle({margin: '20px'})
    })
})