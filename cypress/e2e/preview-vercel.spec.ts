import { dataTestId } from "../support/commands"

describe("Preview env", () => {
  it("checks preview env", () => {
    cy.visit("/")
    cy.contains("Doms Vercel Preview env")
  })
})
