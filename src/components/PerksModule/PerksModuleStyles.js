import styled from 'styled-components'

export const PerksModuleStyles = styled.section`
  background-color: #000;
  position: relative;
  padding-top: 2rem !important;
  text-align: center;
  padding-bottom: 0 !important;
  h2 {
    color: #fff !important;
  }
  h3 {
    margin-top: 1rem;
  }
  .perks__image--bg,
  .perks__image--overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    h2 {
      padding-top: 2rem;
    }
  }
  .perks__image--bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .perks__image--overlay {
    background-color: rgba(0, 0, 0, 0.65);
  }

  .perks__divider {
    font-size: 25px;
    color: var(--primary);

    @media (min-width: 1024px) {
      font-size: 35px;
    }
  }

  > .container {
    padding-top: 4rem;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    align-items: center;

    @media (min-width: 768px) {
      padding-top: 8rem;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    @media (min-width: 1024px) {
      gap: calc(var(--gap) * 2);
    }

    @media (min-width: 1200px) {
      gap: calc(var(--gap) * 4);
    }
  }
`

export const PerkStyles = styled.aside`
  max-width: 275px;
  text-align: left;
  ul {
    padding-left: 0;
  }
  li {
    list-style: none;
    text-align: left;
    .index {
      color: var(--primary);
    }
  }
  .index {
    margin-right: 1rem;
  }
  @media (min-width: 414px) {
    max-width: 325px;
  }

  @media (min-width: 768px) {
    flex: 1 1 50%;
  }

  @media (min-width: 1024px) {
    max-width: 400px;
  }

  h3 {
    display: inline-block;
    border-bottom: 2px solid rgba(255, 255, 255, 0.15);
    border-color: var(--primary);
  }

  p {
    margin-bottom: 0;
  }
  .gatsby-image-wrapper {
    width: 170px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto calc(var(--gap) / 2) auto;

    @media (min-width: 375px) {
      width: 200px;
    }

    @media (min-width: 1024px) {
      width: 300px;
      height: 60px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain !important;
      object-position: center;
    }
  }
`
