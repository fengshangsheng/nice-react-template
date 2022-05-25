import styled from 'styled-components';

const Default = styled.div`
  width: 398px;
  height: 295px;
  background-image: url("${}");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  padding-top: 50px;
  position: relative;

  .close {
    position: absolute;
    right: 30px;
    top: 30px;
    width: 20px;
    height: 20px;
    background-image: url("${}");
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;

    &:active {
      transform: translateY(1px) translateX(1px);
    }
  }

  .title {
    font-size: 22px;
    font-weight: bold;
    line-height: 22px;
    color: #8e6013;
  }

  .disTable {
    display: table;
    width: 100%;
    height: 145px;

    .disTableCell {
      display: table-cell;
      vertical-align: middle;
      color: #000000;
      font-size: 18px;
      line-height: 1.5;
    }
  }

  .btn {
    margin: 0 auto;
    display: inline-block;
    font-size: 16px;
    color: #fff7ce;
    line-height: 1;
    height: 33px;
    width: auto;
    padding: 9px 28px;
    background-image: url("${}");
    background-position: center;
    background-repeat: repeat-x;
    cursor: pointer;

    &:hover {
      background-image: url("${}");
    }
  }
`

const Package = styled.div`
  width: 475px;
  height: 503px;
  background-image: url("${}");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  padding-top: 50px;
  position: relative;

  .close {
    position: absolute;
    right: 30px;
    top: 30px;
    width: 20px;
    height: 20px;
    background-image: url("${}");
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;

    &:active {
      transform: translateY(1px) translateX(1px);
    }
  }

  .title {
    font-size: 22px;
    font-weight: bold;
    line-height: 22px;
    margin-bottom: 30px;
    color: #8e6013;
  }

  ul {
    min-height: 282px;

    & > li {
      overflow: hidden;
      font-size: 16px;
      line-height: 1.2;
      color: #000000;
      margin-bottom: 20px;

      &.none {
        height: 205px;
        line-height: 205px;
        width: 100%;
      }

      &:first-child {
        font-size: 18px;
        font-weight: bold;
        color: #c79849;
        margin-bottom: 26px;
      }

      & > span {
        float: left;
        display: inline-block;

        &:nth-child(1) {
          width: 35%;
        }

        &:nth-child(2) {
          width: 25%;
        }

        &:nth-child(3) {
          width: 40%;
          word-break: break-all;
          white-space: normal;
          user-select: text;
        }
      }
    }
  }

  .changePage {
    span {
      cursor: pointer;
      padding: 0 12px;
      background-color: #c79849;
      color: #ffffff;
      font-size: 14px;
      line-height: 26px;
      display: inline-block;
      margin: 0 25px;

      &:active {
        transform: translateY(1px) translateX(1px);
      }
    }
  }

  .link {
    height: 92px;
    position: relative;

    .list {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);

      a {
        vertical-align: middle;
        color: #c30101;
        text-decoration: underline;
        font-size: 16px;
        cursor: pointer;
        display: block;
        margin: 8px 0 8px 40px;

        &:before {
          content: '';
          display: inline-block;
          border-left: 10px solid #c30101;
          border-top: 7px solid transparent;
          border-bottom: 7px solid transparent;
          margin-right: 6px;
        }
      }
    }
  }

`;

export {
  Default,
  Package,
}
