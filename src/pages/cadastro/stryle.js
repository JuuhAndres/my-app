import styled from 'styled-components';


export const Container = styled.main`
    width:100%;
    max-width:80%;
    margin:0 auto;
    margin-top:120px;

    display:flex;
    flex-direction:row;
    justify-content:space-btween;
    align-items:center;

`
export const Wrapper = styled.div`
    max-width:300px;
`
export const Column = styled.div`
    flex:1;
`
export const Row = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin-top:20px;

`


export const Title = styled.h2`
    font-family: 'Open-Sans';
    font-height: 700;
    font-style: normal;
    font-size:32px;
    width:320px;
    margin-bottom:20px;
    line-height:44px;

    color:#ffffff;

`
export const TitleLogin = styled.p`
    font-family: 'Open-Sans';
    font-height: 700;
    font-style: normal;
    font-size:32px;
    
    margin-bottom:20px;
    line-height:44px;

`
export const SubLogin = styled.p`
    font-family: 'Open-Sans';
    font-height: 400;
    font-style: normal;
    font-size:18px;
   
    margin-bottom:20px;
    line-height:25px;

`
export const EsqueciText = styled.p`
    font-family: 'Open-Sans';
    font-height: 700;
    font-style: normal;
    font-size:14px;
   
    
    line-height:19px;
    color:#e5e044;

    
`
export const CriarFText = styled.p`
    font-family: 'Open-Sans';
    font-height: 700;
    font-style: normal;
    font-size:14px;
   
    
    line-height:19px;
    color:#FFFF;
    a{
        text-decoration:none;
        text-style:none;
        color:#23DD7A;
    }

    &:hover{
        opacity:0.5;
        cursor:pointer;
    }

`
export const Pp = styled.p`
    font-family: Open Sans;
    weight : 100;
    font-size:12px;
    Line height:24.51px;
`