import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, selectCount } from './calculatorSlice';
import styles from './Calculator.module.css';

export function Calculator() {
  const values = useSelector(selectCount);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  return (
    <section className={styles.section}>
      <article className={styles.inputContainer}>
        {values.map((value) => <span>{value}</span>)}
        <input type='text' />
      </article>
      <article className={styles.buttonsContainer}>
        <div className={styles.clearContainer}>
          <button className={styles.clear}>C</button>
          <button className={styles.clear}>AC</button>
        </div>
        <button className={styles.grey}>±</button>
        <button className={styles.grey}>%</button>
        <button className={styles.operator}>X</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className={styles.operator}>÷</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className={styles.operator}>-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className={styles.operator}>+</button>
        <button>0</button>
        <button className={styles.grey}>.</button>
        <button className={styles.result}>=</button>
      </article>
    </section>
  );
}
