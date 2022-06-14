import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    title: {
        fontFamily: ('PlusJakartaSans-ExtraBold','-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'),
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
        color: '#141E61',
        borderBottom: '2px solid rgb(20, 30, 97)'
    },
    form: {
        backgroundColor: 'rgb(238, 238, 238)',
        boxShadow: ' 5px 2px 31px -3px rgba(120,122,145,1);',
        borderRadius: '1em',
        '& label':{
            color: 'rgb(20, 30, 97)',
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