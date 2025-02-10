<template>
    <div class="map__wrapper">
        <div
            ref="mapContainer"
            class="map-container"
        ></div>
        <div class="controls">
            <button @click="flyToCity('home')">Дом</button>
            <button @click="flyToCity('ladogaRoadOfLife')">Дорога Жизни</button>
        </div>
    </div>
</template>

<script setup>
    import mapboxgl from 'mapbox-gl';
    import 'mapbox-gl/dist/mapbox-gl.css';
    import { onBeforeUnmount, onMounted, ref } from 'vue';

    // Конфигурация карты

    const mapStyle = 'mapbox://styles/mapbox/streets-v11';
    const center = [30.315591171025375, 59.95024400191426];
    const zoom = 10;

    // Ссылка на контейнер карты
    const mapContainer = ref(null);

    // Экземпляр карты
    let map = ref(null);

    const cities = {
        home: { center: [30.46191281512, 59.91029599127842], zoom: 16 },
        ladogaRoadOfLife: { center: [31.067184825617886, 60.0815295995626], zoom: 13 },
    };

    const flyToCity = city => {
        if (!map.value || !cities[city]) return;

        const { center, zoom } = cities[city];
        map.value.flyTo({
            center, // Координаты города
            zoom, // Уровень масштабирования
            essential: true, // Анимация обязательна
        });
    };

    onMounted(() => {
        // Инициализация карты
        mapboxgl.accessToken = accessToken;
        map.value = new mapboxgl.Map({
            container: mapContainer.value, // Контейнер для карты
            style: mapStyle, // Стиль карты
            center: center, // Центр карты
            zoom: zoom, // Уровень масштабирования
            projection: 'globe', // Используем проекцию "глобус"
        });

        // Ждем, пока карта загрузится
        map.value.on('load', () => {
            // Устанавливаем эффект "глобуса"
            map.value.setFog({}); // Добавляем туман для реалистичности

            // Добавляем панель управления (зум и вращение)
            map.value.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
        });
    });

    onBeforeUnmount(() => {
        // Уничтожение карты при удалении компонента
        if (map.value) {
            map.value.remove();
        }
    });
</script>

<style scoped>
    .map__wrapper {
        position: relative;
    }
    .map-container {
        width: 100%;
        height: 50vh;
    }

    .controls {
        position: absolute;
        bottom: 20px;
        left: 20px;
        z-index: 1;
        background: rgba(255, 255, 255, 0.8);
        padding: 10px;
        border-radius: 5px;
    }

    button {
        display: block;
        margin: 5px 0;
        padding: 8px 12px;
        font-size: 14px;
        cursor: pointer;
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 4px;
    }

    button:hover {
        background-color: #45a049;
    }
</style>
