const icons = {
    search: 'M6.667 1.334c2.945 0 5.333 2.388 5.333 5.333a5.31 5.31 0 0 1-1.12 3.27l3.592 3.592c.26.26.26.682 0 .943s-.682.26-.943 0l-3.591-3.592a5.31 5.31 0 0 1-3.27 1.12c-2.946 0-5.333-2.388-5.333-5.333s2.388-5.333 5.333-5.333zm0 1.333a4 4 0 1 0 0 8 4 4 0 1 0 0-8z',
    'arrow-next': 'M10.39 3.765c.464-.375 1.187-.349 1.615.057l3.692 3.5a.91.91 0 0 1 0 1.357l-3.692 3.5c-.428.406-1.151.431-1.615.057s-.493-1.007-.065-1.413L12.247 9H1.143C.512 9 0 8.552 0 8s.512-1 1.143-1h11.104l-1.922-1.822c-.428-.406-.399-1.038.065-1.413z',
    'arrow-prev':'M5.61 12.235c-.464.375-1.187.349-1.615-.057l-3.692-3.5a.91.91 0 0 1 0-1.357l3.692-3.5c.428-.406 1.151-.431 1.615-.057s.493 1.007.065 1.413L3.753 7h11.104C15.488 7 16 7.448 16 8s-.512 1-1.143 1H3.753l1.922 1.822c.428.406.399 1.038-.065 1.413z',
    heart: 'M11 2.112c2.393 0 4.333 1.94 4.333 4.333 0 4.245-4.647 6.59-6.542 7.37-.511.21-1.071.21-1.582 0-1.896-.78-6.543-3.124-6.543-7.37 0-2.393 1.94-4.333 4.333-4.333a4.32 4.32 0 0 1 3 1.206 4.32 4.32 0 0 1 3-1.206zm0 1.333c-.807 0-1.537.317-2.077.835l-.462.443c-.258.248-.665.248-.923 0l-.462-.443c-.54-.518-1.27-.835-2.077-.835a3 3 0 0 0-3 3c0 1.588.86 2.9 2.101 3.978s2.728 1.794 3.615 2.159a.73.73 0 0 0 .567 0c.888-.365 2.373-1.08 3.615-2.159S14 8.034 14 6.445a3 3 0 0 0-3-3z',
    'heart-fill': 'M8 3.339a4.32 4.32 0 0 0-3-1.206c-2.393 0-4.333 1.94-4.333 4.333 0 4.246 4.647 6.59 6.543 7.37.511.21 1.071.21 1.582 0 1.896-.78 6.543-3.124 6.543-7.37 0-2.393-1.94-4.333-4.333-4.333a4.32 4.32 0 0 0-3 1.206z',
    'arrow-bottom': 'M15.039 3.961c-.653-.653-1.713-.653-2.366 0L8 8.634 3.327 3.961c-.653-.653-1.713-.653-2.366 0s-.653 1.713 0 2.366l5.856 5.856c.653.653 1.713.653 2.366 0l5.856-5.856c.653-.653.653-1.713 0-2.366z',
    'arrow-expand': 'M11.281 9.207a.75.75 0 0 0 .719-.779l-.143-3.567a.75.75 0 0 0-.719-.719l-3.567-.143a.75.75 0 0 0-.779.719.75.75 0 0 0 .719.779l1.856.074-5.148 5.148a.75.75 0 0 0 0 1.06.75.75 0 0 0 1.06 0l5.148-5.148.074 1.856a.75.75 0 0 0 .779.719z',
    filter: 'M12.263 1.333c1.597 0 2.55 1.78 1.664 3.109h0l-3.148 4.723c-.073.109-.112.238-.112.37h0v2.69a2 2 0 0 1-.94 1.696h0l-1.333.833c-1.332.833-3.06-.125-3.06-1.696h0V9.535c0-.132-.039-.26-.112-.37h0L2.073 4.442c-.886-1.329.067-3.109 1.664-3.109h0zm0 1.333H3.737a.67.67 0 0 0-.555 1.036l3.372 5.059c.073.11.112.238.112.37v3.927a.67.67 0 0 0 1.02.565l1.333-.833c.195-.122.313-.336.313-.565V9.131c0-.132.039-.26.112-.37l3.372-5.059a.67.67 0 0 0-.555-1.036z',
    close: 'M.335.335c.446-.446 1.17-.446 1.616 0L8 6.384 14.049.335c.446-.446 1.17-.446 1.616 0s.446 1.17 0 1.616L9.616 8l6.049 6.049c.446.446.446 1.17 0 1.616s-1.17.446-1.616 0L8 9.616l-6.049 6.049c-.446.446-1.17.446-1.616 0s-.446-1.17 0-1.616L6.384 8 .335 1.951c-.446-.446-.446-1.17 0-1.616'
}

const Icon = ({ size = 16, fill = 'inherit', className, name }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill={fill}
        >
            <path d={icons[name]}></path>
        </svg>
    );
};

export default Icon;