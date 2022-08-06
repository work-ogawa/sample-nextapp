import ContentLoader from 'react-content-loader';

const MyLoaderComponent = () => (
    <ContentLoader viewBox="0 038070">
        <rect x="0" rx="5" ry="5" width="70" height="70" />
        <rect x="80" rx="5" ry="17" width="300" height="13" />
        <rect x="80" rx="40" ry="3" width="250" height="10" />
    </ContentLoader>
)

export function MyLoader() {
    return (
        <div>
            <MyLoaderComponent />
        </div>
    )
}