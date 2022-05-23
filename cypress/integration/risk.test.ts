context("Risk Flow", () => {
  beforeEach(() => {
    const host = Cypress.env("DAPP_HOST") as string
    cy.visit(`${host}#/risk`)
  })

  it("renders the Risk view and its contents", () => {
    cy.get('[data-testid="risk-intro"]').contains(
      "Providing liquidity to metal",
    )
    cy.get('[data-testid="risk-audits"]').contains("The metal smart")
    cy.get('[data-testid="risk-adminkeys"]').contains("metal's admin keys")
    cy.get('[data-testid="risk-lossofpeg"]').contains("If one of the assets")
  })
})
