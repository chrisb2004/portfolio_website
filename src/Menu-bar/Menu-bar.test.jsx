import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, afterEach, vi, beforeEach } from 'vitest'
import MenuBar from './Menu-bar'

afterEach(() => {
  cleanup()
})

describe('MenuBar', () => {

  // ─── render ────────────────────────────────────────────────────────────────

  describe('correct amount of Menu-bar-links rendered', () => {
    it('renders exactly 4 MenuBarLinks', () => {
        render(
          <MenuBar
            onHomeClick={vi.fn()}
            onShowMainBody={vi.fn()}
          />
        )
    
        const links = document.querySelectorAll('#menu-bar-link')
    
        expect(links).toHaveLength(4)
      })
  })


  // ─── correct props at render ────────────────────────────────────────────────────────────────


  describe('Menu-bar-link rendered with correct title and sectionLink', () => {
    beforeEach(() => {
      render(
        <MenuBar
          onHomeClick={vi.fn()}
          onShowMainBody={vi.fn()}
        />
      )
    })
  
    it.each([
      ['Home',     ''],
      ['About',    '#about-section'],
      ['Projects', '#projects-section'],
      ['Contact',  '#contact-section'],
    ])(
      'renders "%s" with correct sectionLink',
      (title, sectionLink) => {
        expect(screen.getByText(title)).toBeInTheDocument()
        expect(screen.getByText(title).closest('a')).toHaveAttribute('href', sectionLink)
      }
    )
  })


  // ─── only onHomeClick is linked to Home ────────────────────────────────────────────────────────────────

  describe('only onHomeClick is linked to Home', () => {
    it('calls  onHomeClick and not onShowMainBody when "Home" is clicked', async () => {
        const user = userEvent.setup();
        const onHomeClick = vi.fn()
        const onShowMainBody = vi.fn()

        render(
            <MenuBar
            onHomeClick={onHomeClick}
            onShowMainBody={onShowMainBody}
            />
        )

        await user.click(screen.getByText('Home'))

        expect(onHomeClick).toHaveBeenCalledOnce()
        expect(onShowMainBody).not.toHaveBeenCalled()
      }
    )
    })

    // ─── only onShowMainBody is linked to all remaining Menu-bar-links ────────────────────────────────────────────────────────────────

    describe('only onsShowMainBody is linked to the remaining Menu-bar-links', () => {
        it.each([
            ['About'],
            ['Projects'],
            ['Contact'],
        ])(
            'calls onShowMainBody and not onHomeClick when "%s" is clicked', 
            async (title) => {
                const user = userEvent.setup();
                const onHomeClick = vi.fn()
                const onShowMainBody = vi.fn()
    
                render(
                    <MenuBar
                    onHomeClick={onHomeClick}
                    onShowMainBody={onShowMainBody}
                    />
                )
    
                await user.click(screen.getByText(title))
    
                expect(onShowMainBody).toHaveBeenCalledOnce()
                expect(onHomeClick).not.toHaveBeenCalled()
            }
        )
    })


    // ─── Download CV link has the correct href and download attribute ────────────────────────────────────────────────────────────────

    describe('Download CV link has the correct href and download attribute', () => {
        it ('check if "Download CV" button is has the correct file path', () => {
            render(
                <MenuBar
                  onHomeClick={vi.fn()}
                  onShowMainBody={vi.fn()}
                />
              )
          
              const downloadLink = document.querySelector('#downloadCVbutton')
          
              expect(downloadLink).toBeInTheDocument()
              expect(downloadLink).toHaveAttribute('href', '/Christopher-Blanco-CV.pdf')
              expect(downloadLink).toHaveAttribute('download')
        })
    })
})