describe('Discounts', () => {
  beforeEach(()=>{
    cy.intercept("GET","http://localhost:3000/undefined/discounts/all",{
      statusCode: 200,
      body: { body: [{
        idStrategy: 1,
        name: "test",
        description: "test",
        discountPercentage: 1,
        isActive: true,
        startDate: "12-1-2023",
        endDate: "12-12-2023",
        discountValue: 1,
        minValue: 1,
        maxDiscount: 1,
        city: "test",
        userType: "test",
        users: [],
      }]},
    })

    cy.intercept("POST","http://localhost:3000/undefined/discounts/create", {
      statusCode: 200,
      body: { body: {
        idStrategy: 1,
        name: "test",
        description: "test",
        discountPercentage: 1,
        isActive: true,
        startDate: "11-12-2023",
        endDate: "12-12-2023",
        discountValue: 1,
        minValue: 1,
        maxDiscount: 1,
        city: "test",
        userType: "test",
        users: [],
      }},
    })

    cy.intercept("PATCH","http://localhost:3000/undefined/discounts/edit/*", {
      statusCode: 200,
      body: { body: {
        idStrategy: 1,
        name: "test",
        description: "test",
        discountPercentage: 1,
        isActive: true,
        startDate: "11-12-2023",
        endDate: "12-12-2023",
        discountValue: 1,
        minValue: 1,
        maxDiscount: 1,
        city: "test",
        userType: "test",
        users: [],
      }
      },
    })

    cy.intercept("DELETE","http://localhost:3000/undefined/discounts/delete/*", {
      statusCode: 200,
      body: { body: {
        idStrategy: 1,
        name: "test",
        description: "test",
        discountPercentage: 1,
        isActive: true,
        startDate: "11-12-2023",
        endDate: "12-12-2023",
        discountValue: 1,
        minValue: 1,
        maxDiscount: 1,
        city: "test",
        userType: "test",
        users: [],
      }},
    })
    cy.visit('/discounts')
  })
  it('visit page and create discount', () => {

    //Given the user is in Discounts page

    //When User insert Discounts Information
    cy.get('[data-testid="addDiscountBtn"]')
    .click()

    cy.get('[data-testid="name"]').type("test1")
    cy.get('[data-testid="description"]').type("test1")
    cy.get('[data-testid="discountValue"]').type("1")
    cy.get('[data-testid="minValue"]').type("1")
    cy.get('[data-testid="startDate"]').
    click().type("2023-12-11T08:30")
    cy.get('[data-testid="endDate"]').
    click({force: true}).type("2023-12-12T08:30")

    //And Send the information

    cy.get('.self-end > .border-blue-500').click()

    //then should be notify that was a success
    cy.get('.fixed > .jsx-912214e52e8a4431')
  })

  it('visit page and update Discount', () => {

    //Given the user is in Discounts page
    //When edits a coupon
    cy.get('[title="Editar"]').click()

    cy.get('[data-testid="nameEdit"]').type("2")

    //And Send the information

    cy.get('[data-testid="editBtn"]').click({multiple:true})

    //then should be notify that was a success
    cy.get('.fixed > .jsx-912214e52e8a4431')
    
  })

  it('visit page and delete Discount', () => {

    //Given the user is in Coupons page
    //When deletes a coupon
    cy.get('[title="Eliminar"]').click()

    cy.get('.mt-4 > :nth-child(2)').click()

    //then should be notify that was a success
    cy.get('.fixed > .jsx-912214e52e8a4431')
    
  })
})