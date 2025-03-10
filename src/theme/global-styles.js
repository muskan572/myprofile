import { GlobalStyles as MUIGlobalStyles } from '@mui/material'

// ----------------------------------------------------------------------

const GlobalStyles = () => {
  const inputGlobalStyles = (
    <MUIGlobalStyles
      styles={(theme) => ({
        '*': {
          boxSizing: 'border-box'
        },
        html: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch'
        },
        body: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%'
        },
        '#root': {
          width: '100%',
          height: '100%'
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none'
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none'
            }
          }
        },
        img: {
          display: 'block',
          maxWidth: '100%'
        },
        ul: {
          margin: 0,
          padding: 0
        },
        '.Flexed-label .MuiFormControlLabel-label': {
          width: '100%'
        },
        '.react-tel-input .form-control': {
          width: '100%',
          height: '10vh '
        },
        '.react-tel-input .flag-dropdown ': {
          backgroundColor: '#ffffff',
          borderRight: 'none'
        }
      })}
    />
  )

  return inputGlobalStyles
}

export { GlobalStyles }