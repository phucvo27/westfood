import styled from 'styled-components';

export const HeaderTitle = styled.div`

    background-image: url("http://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/hero_inner_pages.jpg");
    background-position: top;
    height: 20rem;

    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &::after {
        content: '';
        display: block;
        position: absolute;

        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background-color: #333;
        opacity: .7;
        z-index: 1;
    }
`

export const Content = styled.div`

    width: 77rem;
    margin-left: 20rem;
    color: #fff;
    z-index: 2;
    .title {
        font-size: 2.7rem;
        margin-bottom: 2rem;
    }
    .subtitle {
        font-size: 1.4rem;
        font-style: italic;
    }
`