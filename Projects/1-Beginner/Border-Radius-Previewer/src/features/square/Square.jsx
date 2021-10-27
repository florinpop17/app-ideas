import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  adjust,
  selectBottomLeft,
  selectBottomRight,
  selectTopLeft,
  selectTopRight,
  selectLeftTop,
  selectRightTop,
  selectRightBottom,
  selectLeftBottom,
} from './squareSlice';
import style from './Square.module.css';

const Square = () => {
  const sides = {
    bottomLeft: useSelector(selectBottomLeft),
    bottomRight: useSelector(selectBottomRight),
    topLeft: useSelector(selectTopLeft),
    topRight: useSelector(selectTopRight),
    leftTop: useSelector(selectLeftTop),
    rightTop: useSelector(selectRightTop),
    rightBottom: useSelector(selectRightBottom),
    leftBottom: useSelector(selectLeftBottom),
  };

  const firstValues = `${sides.topLeft}% ${sides.topRight}% ${sides.bottomLeft}% ${sides.bottomRight}%`;
  const secondValues = `${sides.leftTop}% ${sides.rightTop}% ${sides.rightBottom}% ${sides.leftBottom}%`;
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    dispatch(adjust({ side: name, value: Number(value) }));
  };

  const renderInputs = () => {
    return (
      <article className={style.inputContainer}>
        {Object.entries(sides).map((side) => (
          <input
            className={style.input}
            value={side[1]}
            onChange={handleChange}
            type='number'
            name={side[0]}
          />
        ))}
        <button
        onClick={() => navigator.clipboard.writeText(`${firstValues} / ${secondValues}`)}
        >Copiar valores</button>
      </article>
    );
  };

  const renderSquare = () => {
    return (
      <article className={style.squareContainer}>
        <div
          className={style.square}
          style={{
            borderRadius: `${firstValues} / ${secondValues}`,
          }}
        ></div>
      </article>
    );
  };

  return (
    <section className={style.section}>
      {renderInputs()}
      {renderSquare()}
    </section>
  );
};

export default Square;
