import {Modal} from "reactstrap";
import styled from "styled-components";

export const StyledSearchOverlay = styled(Modal)`
  .modal-content {
    background-color: rgba(18, 21, 25, 0.98);
    .modal-header {
      border-bottom: none;
      .btn-close {
        transition: all 0.5s;
        padding-left: 30px;
        padding-top: 30px;
        background: transparent
          url("https://www.cfib-fcei.ca/hubfs/raw_assets/public/CFIB_July2021/images/close.svg")
          center/1.3em auto no-repeat;
        &:hover {
          transform: rotateZ(90deg);
        }
      }
    }
    .modal-body {
      form {
        max-width: 600px;
        margin: auto;
        .form-control {
          background-color: transparent;
          font-size: 30px;
          border: none;
          border-bottom: 1px solid var(--es-identity-color);
          border-radius: 0;
          color: white;
          &:focus {
            box-shadow: none;
          }
        }
        button {
          background-color: var(--es-identity-color);
          border: none;
          color: white;
          border-radius: 100%;
          padding: 0px 16px;
          svg {
            font-size: 25px;
          }
        }
      }
      .search-list {
        margin-top: 20px;
        max-width: 600px;
        margin-inline: auto;
        max-height: 350px;
        overflow-y: auto;
        .search-list-item {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          padding: 8px;
          border-bottom: 1px solid #2c2c2c;
          img {
            object-fit: contain;
          }
          .item-info {
            color: white;
            display: flex;
            flex-direction: column;
            margin-left: 20px;
            .item-title {
              font-size: 18px;
              font-weight: 700;
              cursor: pointer;
            }
            .item-price {
              color: var(--es-identity-color);
              font-size: 15px;
              font-weight: 300;
            }
          }
        }
      }
    }
  }
`;
