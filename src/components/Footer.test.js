import { render } from '@testing-library/vue';
import Footer from './Footer.vue';

test('render test Footer', () => {
    const { debug } = render(Footer);

    debug();
});
