import React from 'react';

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changeMatch();
    window.addEventListener('resize', changeMatch);
    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [media]);

  return match;
};

export default useMedia;

// const UserHeaderNav = () => {
//   const { userLogout } = React.useContext(UserContext);
//   const mobile = useMedia('(max-width: 40rem)');
//   const [mobileMenu, setMobileMenu] = React.useState(false);

//   const { pathname } = useLocation();
//   React.useEffect(() => {
//     setMobileMenu(false);
//   }, [pathname]);

//   return (
//     <>
//       {mobile && (
//         <button
//           aria-label="Menu"
//           className={`${styles.mobileButton} ${
//             mobileMenu && styles.mobileButtonActive
//           }`}
//           onClick={() => {
//             setMobileMenu(!mobileMenu);
//           }}
//         ></button>
//       )}
//       <nav
//         className={`${mobile ? styles.navMobile : styles.nav} ${
//           mobileMenu && styles.navMobileActive
//         }`}
//       >
//         <NavLink to="/conta" end>
//           <MinhasFotos />
//           {mobile && 'Minhas Fotos'}
//         </NavLink>
//         <NavLink to="/conta/estatisticas">
//           <Estatisticas />
//           {mobile && 'Estatisticas'}
//         </NavLink>
//         <NavLink to="/conta/postar">
//           <AdicionarFoto />
//           {mobile && 'Adicionar Foto'}
//         </NavLink>
//         <button onClick={userLogout}>
//           <Sair />
//           {mobile && 'Sair'}
//         </button>
//       </nav>
//     </>
//   );
// };