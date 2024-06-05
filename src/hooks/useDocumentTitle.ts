import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"

const useDocumentTitle = (title: string) => {
    useIsomorphicLayoutEffect(() => {
        window.document.title = title;
    }, [title]);
} 

export default useDocumentTitle;