import styled from "styled-components";
import Todo from ".";

export const StyledTodo = styled(Todo)`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    background-color: white;
    padding: 0 10px;
    .check-with-label:checked + .label-for-check {
        text-decoration: line-through;
    }
    label {
        display: block;
        width: 100%;
        padding: 20px 0;
        
    }
    input {
        margin: 0 10px 0 0;
    }
    .dragHandle {
        height: 30px;
        flex: 0 0 20px;
        position: relative;
        margin: 0 10px 0 0;
        span{
            top: 50%;
        }
        span,
        span:before,
        span:after {
            position: absolute;
            background-color: #ddd;
            left: 0;
            height: 2px;
            width: 100%;
            }
        }
        span:before,
        span:after {
            content: "";
        }
        span:before {
            top: -4px;
        }
        span:after {
            top: 4px;
        }
    }
`;