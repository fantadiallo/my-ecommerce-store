import styles from "./Sidebar.module.css";

const Sidebar = ({ isOpen, type, closeSidebar }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <button className={styles.closeButton} onClick={closeSidebar}>×</button>
      <h2>{type === "cart" ? "Shopping Cart" : "Favorites"}</h2>
      <p>Items will be displayed here...</p>
    </div>
  );
};

export default Sidebar;
