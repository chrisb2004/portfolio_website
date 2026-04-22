import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach, vi, beforeEach } from 'vitest'
import MenuBarLink from './Menu-bar-link'

afterEach(() => {
  cleanup()
})

describe('MenuBarLink', () => {

  // ─── onClick ────────────────────────────────────────────────────────────────

  describe('onClick behaviour', () => {
    it.each([
      ['Home',     '',                  '/home.png'],
      ['About',    '#about-section',    '/about.png'],
      ['Projects', '#projects-section', '/projects.png'],
      ['Contact',  '#contact-section',  '/contact.png'],
    ])(
      'calls onClick when "%s" link is clicked',
      async (title, sectionLink, imgSrc) => {
        const user = userEvent.setup()
        const onClickMock = vi.fn()

        render(
          <MenuBarLink
            title={title}
            sectionLink={sectionLink}
            imgSrc={imgSrc}
            onClick={onClickMock}
          />
        )

        await user.click(screen.getByText(title))

        expect(onClickMock).toHaveBeenCalledOnce()
      }
    )

    it('does not throw if onClick prop is not provided', async () => {
      const user = userEvent.setup()

      render(
        <MenuBarLink
          title="Home"
          sectionLink=""
          imgSrc="/home.png"
        />
      )

      // onClick is optional (?.) in the component — this should not throw
      await expect(
        user.click(screen.getByText('Home'))
      ).resolves.not.toThrow()
    })
  })

  // ─── scrollIntoView ──────────────────────────────────────────────────────────

  describe('scrollIntoView behaviour', () => {
    let scrollMock

    beforeEach(() => {
      scrollMock = vi.fn()

      /*
      
      The reason it's there is to give the DOM a moment to finish any layout changes before scrolling — so the scroll lands in the right position. 
      Think of it as a polite "wait one frame, then scroll."
      The problem in tests is that jsdom (the fake browser Vitest uses) doesn't actually paint frames, so requestAnimationFrame either runs inconsistently or not at all. 
      That's why we mock it like this:

      */
      vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => { cb(); return 0; })
      // jsdom does not implement scrollIntoView — we need to mock it
      // We also need document.querySelector to return a fake element
      vi.spyOn(document, 'querySelector').mockReturnValue({
        scrollIntoView: scrollMock,
      })
    })

    afterEach(() => {
      vi.restoreAllMocks()
    })

    it.each([
      ['About',    '#about-section'],
      ['Projects', '#projects-section'],
      ['Contact',  '#contact-section'],
    ])(
      'calls scrollIntoView with smooth behaviour for "%s"',
      async (title, sectionLink, imgSrc) => {
        const user = userEvent.setup()

        render(
          <MenuBarLink
            title={title}
            sectionLink={sectionLink}
            imgSrc={imgSrc}
            onClick={vi.fn()}
          />
        )

        await user.click(screen.getByText(title))

        // requestAnimationFrame is sync in jsdom, so scrollIntoView fires immediately
        expect(document.querySelector).toHaveBeenCalledWith(sectionLink)
        expect(scrollMock).toHaveBeenCalledWith({ behavior: 'smooth' })
      }
    )

    it('does NOT call scrollIntoView when sectionLink is empty (Home)', async () => {
      const user = userEvent.setup()

      render(
        <MenuBarLink
          title="Home"
          sectionLink=""
          imgSrc="/home.png"
          onClick={vi.fn()}
        />
      )

      await user.click(screen.getByText('Home'))

      expect(scrollMock).not.toHaveBeenCalled()
    })
  })
})