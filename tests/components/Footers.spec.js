import { mount } from '@vue/test-utils';
import Footer from '../../src/components/Footer.vue'; // Укажите правильный путь к компоненту

describe('Footer.vue', () => {
    it('отображает текст в элементе footer__discription', () => {
        const wrapper = mount(Footer);
        const descriptionText = wrapper.find('.footer__discription').text();
        expect(descriptionText).toContain('Пет-проект');
        expect(descriptionText).toContain('Страницы в разработке');
    });

    it('переходит на страницу /page-vk при клике на span', async () => {
        const mockRouter = {
            push: jest.fn(), // Используем jest.fn() для мокирования
        };

        const wrapper = mount(Footer, {
            global: {
                mocks: {
                    $router: mockRouter, // Подменяем $router на мок
                },
            },
        });

        await wrapper.find('.footer__discription span').trigger('click'); // Кликаем на span
        expect(mockRouter.push).toHaveBeenCalledWith('/page-vk'); // Проверяем, что был вызван push с правильным аргументом
    });
});
