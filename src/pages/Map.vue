<template>
    <div class="map__wrapper">
        <h2 class="section-title">Карта (mapbox)</h2>
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
    const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

    const mapStyle = 'mapbox://styles/mapbox/streets-v11';
    const center = [30.315591171025375, 59.95024400191426];
    const zoom = 10;

    // Ссылка на контейнер карты
    const mapContainer = ref(null);

    // Экземпляр карты
    let map = ref(null);

    // Текущая метка
    let currentMarker = ref(null);

    const cities = {
        home: { center: [30.46191281512, 59.91029599127842], zoom: 16 },
        ladogaRoadOfLife: { center: [31.067184825617886, 60.0815295995626], zoom: 13 },
    };

    const flyToCity = city => {
        if (!map.value || !cities[city]) return;

        // Удаляем предыдущую метку, если она есть
        if (currentMarker.value) {
            currentMarker.value.remove();
            currentMarker.value = null;
        }

        const { center, zoom } = cities[city];
        map.value.flyTo({
            center, // Координаты города
            zoom, // Уровень масштабирования
            essential: true, // Анимация обязательна
        });

        // Добавляем новую метку
        currentMarker.value = new mapboxgl.Marker({ color: '#FF0000' }) // Красная метка
            .setLngLat(center) // Устанавливаем координаты
            .addTo(map.value); // Добавляем на карту

        // Добавляем всплывающее окно (popup)
        const popup = new mapboxgl.Popup({ offset: 25 }).setText(city);
        currentMarker.value.setPopup(popup);
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
            // Добавляем панель управления (зум и вращение)
            map.value.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

            addMarker(cities.home.center, 'Home');
            addMarker(cities.ladogaRoadOfLife.center, 'Ladoga');
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
        filter: var(--darkening-map);
    }

    .controls {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        z-index: 1;
        padding: 5px 7px;
        border-radius: 5px;
    }

    button {
        display: block;
        margin: 5px 0;
        padding: 8px 12px;
        font-size: 14px;
        cursor: pointer;
        color: var(--primary);
        border: 1px solid var(--primary);
        background: none;
        border-radius: 8px;
    }

    button:hover {
        opacity: 0.6;
    }
</style>
