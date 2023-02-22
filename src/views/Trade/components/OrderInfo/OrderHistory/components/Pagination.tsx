import React from 'react'

import { useTheme } from '@material-ui/core/styles'
import { StyledPaginationBtn, StyledPageInfoBtn } from './styles'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'

interface TablePaginationActionsProps {
  count: number
  page: number
  rowsPerPage: number
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void
}

export default function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme()
  const { count, page, rowsPerPage, onPageChange } = props

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1)
  }

  return (
    <>
      <StyledPaginationBtn onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </StyledPaginationBtn>
      <StyledPageInfoBtn>
        {page + 1} of {Math.ceil(count / rowsPerPage)}
      </StyledPageInfoBtn>
      <StyledPaginationBtn
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </StyledPaginationBtn>
    </>
  )
}
