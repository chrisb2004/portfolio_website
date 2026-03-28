import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import MenuBarLink from './Menu-bar-link'

afterEach(() => {
  cleanup()
})

describe('MenuBarLink', () => {
  /**
   * it.each([ ... ]) holds a TABLE of test cases.
   * Each row is one scenario: the same test runs once per row, with those values
   * passed as arguments to the callback (title, sectionLink, imgSrc).
   *
   * Use this when several cases differ only by data (same assertions, different props).
   */
  it.each([
    ['About', '#about-section', '/about.png'],
    ['Projects', '#projects-section', '/projects.png'],
    ['Contact', '#contact-section', '/contact.png'],
  ])(
    'renders link "%s" with href %s and matching image alt',
    (title, sectionLink, imgSrc) => {
      render(
        <MenuBarLink title={title} sectionLink={sectionLink} imgSrc={imgSrc} />
      )

      const link = screen.getByRole('link', { name: new RegExp(title) })
      expect(link).toHaveAttribute('href', sectionLink)

      const img = screen.getByRole('img', { name: title })
      expect(img).toHaveAttribute('src', imgSrc)
    }
  )
})
