import styled from 'styled-components';

const yellow = '#D8C149';
const textColor = '#7e7b73';
export const Wrapper = styled.section`

    width: 100%;
    height: 56rem;
    background-image: url('http://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/09/background_21.jpg');
    background-size: cover;
    background-position: center;

    position: relative;

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-image: url('http://organic-food.bold-themes.com/main-demo/wp-content/themes/organic-food/gfx/diagonalstripe-black.png');
        background-position: center;
        background-repeat: repeat;
    }

    @media screen and (max-width: 800px){
        height: 70rem;
    }
`;

export const Container = styled.div`

    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    width: 80%;
    transform: translate(-50%, -50%);

`
export const Text = styled.div`

    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    span {
        display: block;
        font-size: 4rem;
        color: #fff;
    }

    span.highlight {
        color: ${yellow}
    }

    .line {
        width: 5rem;
        height: .1rem;
        background-color: ${yellow};
        margin: 1rem 0;
    }
    p {
        font-size: 1.5rem;
        color: #fff;
    }
`

export const Box = styled.div`

    background-color: #f4f4f4;
    padding: 4rem;
    width: 70%;
    margin: auto;
    .subtext {
        font-size: 1.6rem;
        margin-bottom: 1rem;
    }
    span.subtext {
        font-style: italic;
        display: block;
    }
    .maintext {
        color: ${textColor};
        font-size: 3.2rem;
    }

    @media screen and (max-width: 800px){
        width: 100%;
    }

`