import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default {
    useLabelStyles: makeStyles((theme: Theme) => createStyles({
      root: {
        color: 'white',
        marginLeft: '1.05rem',
        

      },
      shrink: {
        transform: 'translate(0, 1.5px) scale(1)',
      },
    })),

    useBaseStyles: makeStyles((theme: Theme) => createStyles({
      root: {
        borderRadius: 12,
        border: '1px solid',
        borderColor: theme.palette.primary.main,
        overflow: 'hidden',
        backgroundColor: '#e4ecde',
        '&:hover:not($disabled)': {
          borderColor: '#e4ecde',
        },
        '& > svg': {
          color: theme.palette.grey[500],
        },
      },
      focused: {
        boxShadow: '0 2px 6px 0 rgba(0,0,0,0.24)',
        borderColor: theme.palette.primary.main,
        '&:hover:not($disabled)': {
          borderColor: theme.palette.primary.main,
        },
        '&$adornedStart': {
          '& > svg': {
            color: theme.palette.primary.light,
          },
        },
        '&$colorSecondary': {
          borderColor: theme.palette.secondary.main,
          '&:hover:not($disabled)': {
            borderColor: theme.palette.secondary.main,
          },
          '&$adornedStart': {
            '& > svg': {
              color: theme.palette.secondary.light,
            },
          },
        }
      },
      error: {
        backgroundColor: '#fff9f9',
        borderColor: '#ff5252',
        '&:hover:not($disabled)': {
          borderColor: '#ff5252',
        },
      },
      disabled: {
        backgroundColor: theme.palette.grey[100],
      },
      input: {
        padding: '0.625rem 1rem',
        '&:not(:first-child)': {
          paddingLeft: '0.5rem',
        },
        '&:not(:last-child)': {
          paddingRight: '0.5rem',
        },
        '&::placeholder': {
          textOverflow: 'ellipsis !important',
          color:theme.palette.primary.main,
          'font-weight': 600
        }
      },
      formControl: {
        'label + &': {
          marginTop: 24,
        },
      },
    }))
}
