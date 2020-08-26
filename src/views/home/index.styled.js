import styled from 'styled-components';

const HomeContainer = styled.div`
    .rules{
        margin: 0 50px;
        display: flex;
        align-items: center;
        justify-content:center;
        flex-direction: column;
    }
    .description{
        margin: 50px;
        .appresentation{
            border-left: 1px solid black;
            padding-left: 20px;
            margin-bottom: 50px;
        }
        h3{
            text-align: center;
            color: gray;
        }
    }
    .logical-dictionary{
        width: 100%;
        display: flex;
        justify-content: center;

        button{
            height: 60px;
            width: 60px;
            border: none;
            margin: 0.5rem 0.2rem;
            transition: 0.4s;
            
            :hover{
                background: gray;
                color: white;
            }
        }
    }
    .sentence-box{
        display: flex;
        justify-content: center;
        
        input[type="text" i]{
            padding:0 0 0 20px;
            margin: 0 5px;
            height: 40px;
            width: 100%;
            max-width: 520px;
            border: 1px solid gray;
        }
    }
    .buttons-box{
        margin: 20px 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        button{
            height: 50px;
            background: lightblue;
            border: none;
            border-radius: 10px;

            :hover{
                background: lightskyblue;
                text-decoration: underline;
            }
        }
        button+button{
            margin-left: 20px;
        }
    }
    .feedback-text{
        display: flex;
        justify-content: center;
        align-items: center;

        .success{
            display: flex;
            align-items: center;
            svg{
                width: 35px;
                height: 35px;
                color: green;
            }
            svg+span{
                margin-left:20px;
            }
            span{
                font-size: 1.4rem;
                font-weight: bold;
                font-family: monospace;
                color: green;
                text-transform: uppercase;
            }
        }
        .fail{
            display: flex;
            align-items: center;
            svg{
                width: 35px;
                height: 35px;
                color: red;
            }
            svg+span{
                margin-left:20px;
            }
            span{
                font-size: 1.4rem;
                font-weight: bold;
                font-family: monospace;
                color: red;
                text-transform: uppercase;
            }
        }
        .result{
            display: flex;
            align-items: center;
            svg{
                width: 35px;
                height: 35px;
                color: blue;
            }
            svg+span{
                margin-left:20px;
            }
            span{
                font-size: 1.4rem;
                font-weight: bold;
                font-family: monospace;
                color: blue;
                text-transform: uppercase;
            }
        }
    }
`;

export default HomeContainer;