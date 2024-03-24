<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <RouterLink class="navbar-brand" to="/">Home</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <RouterLink class="nav-item nav-link me-4 active" to="/about">關於</RouterLink>
                <RouterLink class="nav-item nav-link me-4" to="/products">產品列表</RouterLink>
                <RouterLink class="nav-item nav-link me-4" to="/cart">購物車</RouterLink>
                <RouterLink class="nav-item nav-link" to="/login">登入<i class="fas fa-shopping-cart"></i></RouterLink>
            </div>
        </div>
    </nav>
</template>
