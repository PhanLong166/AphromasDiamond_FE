import 'styled-components';
import { MediaQueries } from 'styled-breakpoints';
import { breakpoints } from './main';

type Min = keyof typeof breakpoints;

type Max = Exclude<keyof typeof breakpoints, 'xs'>;
type Max = Exclude<keyof typeof breakpoints, 'sm'>;
type Max = Exclude<keyof typeof breakpoints, 'md'>;
type Max = Exclude<keyof typeof breakpoints, 'lg'>;
type Max = Exclude<keyof typeof breakpoints, 'xl'>;
type Max = Exclude<keyof typeof breakpoints, 'xxl'>;

declare module 'styled-components' {
    export interface DefaultTheme {
        breakpoints: MediaQueries<Min, Max>;
    }
}
