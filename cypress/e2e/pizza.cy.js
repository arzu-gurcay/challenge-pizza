describe('Pizza Sipariş Formu', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5174/pizza'); 
  });

  it('Inputa bir metin giren test', () => {
    cy.get("[data-cy='input-name']").type('Arzu').should('have.value', 'Arzu');
    });
    it("Birden fazla malzeme seçilebilen bir test", () => {
      cy.get("[data-cy='checkbox-Kabak']").check({force:true}).should('be.checked');
      cy.get("[data-cy='checkbox-Sosis']").check({force:true}).should('be.checked');
        cy.get("[data-cy='checkbox-Biber']").check({force:true}).should('be.checked');
        cy.get("[data-cy='checkbox-Ananas']").check({force:true}).should('be.checked');
    });
    it("Formu gönderen bir test", () => {
      cy.get("[data-cy='input-name']").type('Arzu').should('have.value', 'Arzu');
      cy.get("[data-cy='radio-size-orta']").check().should('be.checked');
      cy.get("[data-cy='select-hamur']").select('normal').should('have.value', 'normal');
      const malzemeler=['Kabak', 'Sosis', 'Biber', 'Ananas'];
        malzemeler.forEach((malzeme)=>{
            cy.get(`[data-cy='checkbox-${malzeme}']`).check().should('be.checked');
        });
      cy.get("[data-cy='textarea-note']").type('Bol peynir olsun').should('have.value', 'Bol peynir olsun');
      cy.get("[data-cy='btn-submit']").click();
    });
});

// src/components/Pizza.jsx
import React, { useState, useEffect } from "react";