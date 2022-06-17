import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    title: {
        fontFamily: ('PlusJakartaSans-ExtraBold','-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'),
    },
    article: {
        background: 'rgb(10, 25, 41)',
        minHeight: '100vh',
        height: 'auto',
        width: '100vw',
        background: 'url(https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?t=st=1655485174~exp=1655485774~hmac=c60ccd2c522d954acd7b087a5f84906546a58502eb1bc76902e08e1bad14463e&w=900)',
    },
    button: {
        backgroundColor: 'rgb(20, 30, 97)',
        color: 'white',
        padding: '0.5em',
        letterSpacing: '0.1em',
        border: '2px solid rgb(20, 30, 97)',
        '&:hover': {
            color: '#141E61',
            backgroundColor: 'white',
            border: '2px solid rgb(120, 122, 145)',
            transition: 'all 0.3s ease-in'
        },
        '&:focus': {
            boxShadow: 'none',
        }
    },
    border: {
        border: '2px solid rgb(238, 238, 238)',
        '&:focus': {
            boxShadow: 'none',
            border: '2px solid rgb(20, 30, 97)'
        }
    },
    heading: {
        borderBottom: '2px solid white'
    },
    form: {
        
        background: 'rgba(255, 255, 255, 0.08)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        borderRadius: '10px',
        WebkitBackdropFilter: 'blur(5px)',
        border: '1px solid rgba( 255, 255, 255, 0.2 )',
        color: 'white',

        '& label': {
        },
        
        '& input, textarea': {
            // fontWeight: 500,
            fontSize: '18px',
            borderRadius: '5px',
            lineHeight: '22px',
            backgroundColor: 'transparent',
            border: '2px solid #1f7abf',
            transition: 'all 0.3s',
            padding: '13px',
            // margin: '0 0 15px 0',
            width: '100%',
            boxSizing: 'border-box',
            outline: 0,
            color: 'white',

            '&:focus': {
                border: '2px solid white',
                background: 'transparent',
                color: 'white'
            }
        },
        '& span': {
            fontSize: '0.8em',
            color: 'red',
            padding: '0.3em',
            fontStyle: 'italic',
        },
        '@media only screen and (min-width: 768px)': {
            width: '50%',
            margin: 'auto'
        },
        '& button': {
            width: '100%',
            color: 'white',
            border: '0',
            cursor: 'pointer',
            fontSize: '24px',
            padding: '10px 0',
            borderRadius: '5px',
            transition: 'all 0.3s',
            margin: '-4px 0 0 0',
            // fontWeight: '',
            background: '#005fa7',
            letterSpacing: '0.1em',

            '&:hover': {
                color: 'white',
                border: '2px solid #1f7abf',
                background: 'transparent'
            },

            '&:focus': {
                boxShadow: 'none',
                border: '1px solid white'
            },
        }
    },
    icons: {
        color: 'white',
        margin: '0.2em',
        backgroundColor: 'rgb(20, 30, 97)',
        borderRadius: '0.5em',
        '&:hover': {
            color: 'rgb(20, 30, 97)',
            backgroundColor: 'white',
            border: '1px solid rgb(20, 30, 97)',
            transition: 'all 0.3s ease-in'
        }
    },
    articleContainer: {
        '& h3': {
            color: 'rgb(20, 30, 97)',
        },
        '& small': {
            color: 'rgb(120, 122, 145)'
        },
        '& p': {
            fontSize: '0.9em',
            color: 'rgb(63, 65, 79);'
        },
        '& span': {
            color: 'rgb(120, 122, 145)'
        },
        '@media only screen and (min-width: 768px)': {
            width: '70%',
            margin: 'auto'
        }
    },
    bBottom: {
        borderBottom: '2px solid rgb(120, 122, 145,0.3)',
    },
    anchor: {
        textDecoration: 'none',
        fontWeight: 500,
    },
    
})

export default useStyles