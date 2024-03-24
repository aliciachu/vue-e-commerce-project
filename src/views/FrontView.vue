<template>
    <h2>前台</h2>
    <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/products">產品列表</RouterLink> |
        <RouterLink to="/cart">購物車</RouterLink> |
        <RouterLink to="/login">登入</RouterLink>
    </nav>

    <RouterView></RouterView>
</template>
