# styled-components
## 導入

```markdown
npm install styled-components
npm install --save-dev @types/styled-components
```

## 設定

- next.config.js

```markdown
  compiler: {
    styledComponents: true
  }
```

# SSRでstyled-componentsを動作させる

- pages/_document.tsx 参照
- pages/_app.tsx を編集し、createGlobalStyleを使ってグローバルスタイルを適用する


# ESLintの設定

- install

```markdown
npm install --save-dev prettier eslint typescript-eslint \
    @typescript-eslint/eslint-plugin @typescript-eslint/parser \
    eslint-config-prettier eslint-plugin-prettier eslint-plugin-react \
    eslint-plugin-react-hooks eslint-plugin-import
```

- .esintrc.json

- package.json

```markdown
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint --dir src",
    "format": "next lint --fix --dir src"
  },
```

以下実行.

```markdown
- リントを行い、ソースコードの問題を列挙する
npm run lint
- lint エラーの自動フォーマットを行う
npm run format
```

# StoryBook導入

- 初期化

```markdown
npx sb init
```

- プラグイン等のライブラリ導入

```markdown
npm install --save-dev @storybook/addon-postcss tsconfig-paths-webpack-plugin \
    @babel/plugin-proposal-class-properties @babel/plugin-proposal-private-methods \
    @babel/plugin-proposal-private-property-in-object tsconfig-paths-webpack-plugin @mdx-js/react
```

エラーになった場合

package-lock.jsonの依存関係の設定について、
エラーが発生したバージョンに変更「^1.0.0」など。

## アセットの配置準備

```
mkdir .storybook/public
```

### main.js

staticDirsを設定し、静的ファイルを配置するディレクトリを指定.

```markdown
module.exports = {
    ...
    staticDirs: ['public'],
}
```

## StoryBookのThemeの設定

- .story-book参照

# React Hook Form導入

- フォームバリデーションライブラリ.

```markdown
npm install react-hook-form
```


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## SWRの導入
### 機能

データ取得を効率化、コンポーネントはデータの更新を継続的かつ自動的に受け取れる
HTTP RFC 5861の stale-while-revalidate に由来.

最初にキャッシュからデータを返す(stale)、
次にフェッチリクエストを送り(revalidate)、
最後に最新データを持ってくるという動作をする.
キャッシュが古くならないまま高速化の恩恵を受けられる

### 特徴

```markdown
- 取得したデータのキャッシュか
- 定期的なデータのポーリング
- キャッシュとリクエストの重複削除
- 画面フォーカス次のサイドデータの更新
- ネットワーク回復時間の再度データの更新
- エラーの再試行
- ページネーションとスクロールポジションの回復
- React Suspense
```

# React content Loaderの導入

```markdown
npm install react-content-loader
npm install --save-dev @types/react-content-loader
```

# Material Icons導入

```markdown
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```

# 環境変数

- プロジェクトルートに.envファイルを配置.

```markdown
API_BASE_URL=http://localhost:8000
NEXT_PUBLIC_API_BASE_PATH=/api/proxy
```

## テスト環境構築

```markdown
npm install --save-dev @testing-library/jest-dom @testing-library/react jest jest-environment-jsdom
```

- jest.setup.js, jest.config.js作成
- package.jsonのscriptsに以下追記

```markdown
    "test": "jest"
```
### テスト実行

```markdown
npm run test
```

```markdown
> nextjs-gihyo-book@0.1.0 test
> jest

No tests found, exiting with code 1
```

- next.config.jsにビルド時にReact Testing Libraryで使用するdata-testid属性を削除する設定を追加
- この属性は本番環境で必要がないため

# JSON Serverの設定

- REST APIのダミーエンドポイントを作成するためのツール
- 今回のアプリケーション開発では、フロントエンドの実装のみ行い、JSON Serverをバックエンドに使い開発を簡略化
- Next.jsで実装するアプリは独立したものになる

| API      | パス             | HTTPメソッド  | 説明         |
|----------|----------------|-----------|------------|
| 認証API    | /auth/signin   | POST      | サインイン      |
| 認証API    | /auth/signout  | POST      | サインアウト     |
| ユーザーAPI  | /users         | GET       | 一覧取得       |
| ユーザーAPI  | /users/{id}    | GET       | 個別取得       |
| ユーザーAPI  | /users/me      | GET       | 認証済ユーザーを取得 |
| プロダクトAPI | /products      | GET, POST | 一覧取得、新規追加  |
| プロダクトAPI | /products/{id} | GET       | 個別取得       |
| 購入API    | /purchases     | POST      | 商品購入       |

## JSONサーバの取得

```markdown
git clone https://github.com/gihyo-book/ts-nextbook-json
cd ts-nextbook-json
npm ci
```


# アプリケーションアーキテクチャと実装の流れ

1. APIクライアント実装
2. コンポーネント実装の準備
レスポンシブデザインに対応したコンポーネントを手軽に実装するために、
ユーティリティ関数や型、Wrapperコンポーネントなどを作成する.
3. Atomic Designによるコンポーネント設計
コンポーネント分割, Storybookでデザインを確認しながら実装.
コンポーネントを実装し終えた後に、コンポーネントを組み合わせながら、ページを実装.
4. Atomsの実装
5. Moleculesの実装
6. Organismsの実装
7. Templateの実装
8. ページの設計と実装
9. コンポーネントのユニットテスト

# APIクライアントの実装

| 関数名                        | API      | パス             | 
|----------------------------|----------|----------------|
| signin                     | 認証API    | /auth/signin   | 
| signout                    | 認証API    | /auth/signout  |
| getAllUsers                | ユーザーAPI  | /users         | 
| getUser                    | ユーザーAPI  | /users/{id}    |
| getUser                    | ユーザーAPI  | /users/me      |
| getAllProducts, addProduct | プロダクトAPI | /products      |
| getProduct                 | プロダクトAPI | /products/{id} |
| purchase                   | 購入API    | /purchases     |

## fetcher関数

APIクライアントは、定義したfetcher関数を利用してリクエストを送信する.
リクエストが失敗した場合は例外をサーバーから帰ってくるメッセージとともに投げる.

- src/utils/index.ts

## APIクライアントの関数
### サインイン

- src/services/auth/signin.ts

### ユーザー取得

- src/servics/users/get-user.ts

## アプリケーションで使用されるデータの型

- src/types/data.d.ts

## 開発のためのAPIリクエストプロキシ

オリジン間リソース共有(CORS) でのCookie送信を避けるために、Next.jsのRewrites機能を使用してプロキシを設定.
Next.jsのエンドポイントにリクエストを送信すると、json-serverのエンドポイントに変換されてリクエストが送信される.
Next.jsのRerites機能を利用するには、next.config.jsを以下のように編集

- next.config.js

```ts
  // 追加
  async rewrites() {
    return [
      {
        // ex. /api/proxy
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match*`,
        // ex. http://localhost:8000
        destination: `${process.env.API_BASE_URL}/:match*`,
      },
    ]
  },
}
```

# コンポーネント実装の準備

コンポーネントの設計や実装の前に、下準備を済ませる

- レスポンシブデザイン対応を簡潔な記述で実現
- Themeの機能を使いやすくする
- これらの機能を型の機能を活かして実装する

レイアウトなどを効率化するWrapperコンポーネントも事前に実装する

## レスポンシブデザインに対応したコンポーネント
### モバイル対策

- レスポンシブデザイン(デスクトップモバイルで同一ページを用意し、CSSで表示を切り替える)
- 別ドメイン/別階層 など URL でモバイル向けのページを用意する (mobile.example.comやexample.com/mobileなど)

```markdown
.container {
    display: flex;
    flex-direction: column; /* デフォルトでは縦並びで表示する */
}
/* @mediaで画面サイズなどを基準にCSSをだし分ける */
@media (min-width: 640px) {
    /* 640px以上の画面サイズの場合に適用するスタイル */
    .container {
        flex-direction: row; /* 画面サイズが640px以上は横並びになるように表示する */
    }
}
```

- 0px ~ 640px: スマホ向け
- 641px ~ 1007px: タブレット向け
- 1008px ~ : デスクトップ向け

| 画面幅           | ブレークポイント名        |
|---------------|------------------|
| 640px〜767px   | sm (small)       |
| 768px〜1023px  | md (medium)      |
| 1024px〜1279px | lg (large)       |
| 1280px〜1525px | xl (extra large) |

## styled-componentsでレスポンシブデザインを実現する

- 記法例

```markdown
// base(デフォルト)とsm(小画面サイズ)でそれぞれ別のサイズを設定.
<Component fontSize={{ base: '12rem', sm: '10rem' }} />
// baseなしで値だけでも適切に処理できる
<Component fontSize='12rem'/>
```

```markdown
function toPropsValue<T>(propKey: string, prop?: Responsiv<T>): string {
    // "CSSプロパティ: 値": を返す
}
```

```markdown
/**
* Responsiveプロパティ
* CSSプロパティの値をブレークポイント毎に設定可能
* TはCSSプロパティの型
*/
type ResponsiveProp<T> = {
  base?: T // デフォルト
  sm?: T // 640px以上
  md?: T // 768px以上
  lg?: T // 1024px以上
  xl?: T // 1280px以上
}

/**
* Responsive型はResponsiveプロパティもしくはCSSプロパティの値
*/
type Responsive<T> = T | ResponsiveProps<T>

/**
* Responsive型をCSSプロパティとその値に変換
* @param propKey CSSプロパティ
* @param prop Responsive型
* @returns CSSプロパティとその値 (ex. background-color: white; )
*/
function toPropValue<T>(propKey: string, prop?: Responsive<T>): string {
}

interface ContainerProps {
    flexDirection?: Responsive<string>
}

const Container = styled.section<>`
    padding: 4em;
    display: flex;
    ${(props) => toPropValue('flex-direction', props.flexDirection)}
`
const Page: NextPage = () => {
    return (
        <>
            <Container flexDirection="column">
                {/* 常に縦並びになる */}
                <div>First item</div>
                <div>Second item</div>   
            </Container>
            <Container flexDirection={{ base: 'column', sm: 'row' }} >
            {/* 640px以上だと横並び、それ以外だと縦並びとなる */}
            <div>First item</div>
            <div>Second item</div>   
            </Container>
        </>
    )
}
```

# Atomic Designによるコンポーネント設計の実施

- propsやコンテキストを活用し、ビジネスロジックの実装を避け、再利用可能にする
- 外部依存性を極力排除し、外部から依存性を注入できるようにする
- 個々のコンポーネントはStorybookで確認
- ユニットテストの追加

## 実装の流れ

1. デザインを元に、Atomic Designに沿ったコンポーネントの分割
2. Atomsの実装
3. Moleculesの実装
4. Organismsの実装
5. Templateの実装
6. ページ (Pages) の実装
7. APIクライアント等の外部依存関係の実装

## Atomic Designに沿ってコンポーネントを分割する

### ヘッダー・フッター

ヘッダー・フッターは以下のコンポーネントに分けられる

| 種類        | コンポーネント                                     |
|-----------|---------------------------------------------|
| Atoms     | ボタン, ロゴ, テキスト, シェイプイメージ, スピナー, バッジ, アイコンボタン |
| Molecules | バッジアイコンボタン                                  |
| Organisms | ヘッダー                                        |
| Templates | なし                                          |

## サインインページ

| 種類        | コンポーネント                              |
|-----------|--------------------------------------|
| Atoms     | ボタン, ロゴ, テキスト, テキストインプット, テキスト, スピナー |
| Molecules | なし                                   |
| Organisms | サインインフォーム, グローバルスピナー                 |
| Templates | レイアウト                                |

## ユーザーページ

| 種類        | コンポーネント                                     |
|-----------|---------------------------------------------|
| Atoms     | ぱんくずリスト要素, セパレーター, テキスト, スケールイメージ, シェイプイメージ |
| Molecules | ぱんくずリスト                                     |
| Organisms | ユーザープロファイル, 商品カード, 商品カードリスト                 |
| Templates | レイアウト                                       |

## TOPページ

| 種類        | コンポーネント                  |
|-----------|--------------------------|
| Atoms     | テキスト, スケールイメージ, シェイプイメージ |
| Molecules | なし                       |
| Organisms | 商品カード, 商品カードカルーセル        |
| Templates | レイアウト                    |


## 検索ページ

| 種類        | コンポーネント                                                |
|-----------|--------------------------------------------------------|
| Atoms     | ぱんくずリスト要素, ボタン, テキスト, スケールイメージ, シェイプイメージ, 矩形(rect)ローダー |
| Molecules | ぱんくずリスト, チェックボックス, フィルターグループ                           |
| Organisms | 商品カード, 商品カードカルーセル                                      |
| Templates | レイアウト                                                  |


## 商品詳細ページ

| 種類        | コンポーネント                                     |
|-----------|---------------------------------------------|
| Atoms     | ぱんくずリスト要素, セパレーター, テキスト, スケールイメージ, シェイプイメージ |
| Molecules | ぱんくずリスト                                     |
| Organisms | 商品カード                                       |
| Templates | レイアウト                                       |

## 買い物カートページ

| 種類        | コンポーネント              |
|-----------|----------------------|
| Atoms     | ぱんくずリスト要素, ボタン, テキスト |
| Molecules | ぱんくずリスト              |
| Organisms | 商品カード                |
| Templates | レイアウト                |

## 出品ページ

| 種類        | コンポーネント                                 |
|-----------|-----------------------------------------|
| Atoms     | ロゴ, ボタン, テキスト, テキストインプット, テキストエリア, スピナー |
| Molecules | ドロップダウン, ドロップダウンゾーン, 画像インプット            |
| Organisms | 商品投稿フォーム, グローバルスピナー                     |
| Templates | レイアウト                                   |

# Atomsの実装

- src/components/atoms

# Moleculesの実装

- src/components/molecules

| コンポーネント    | 関数コンポーネント名      |
|------------|-----------------|
| バッジアイコンボタン | BudgeIconButton |
| パンくずリスト    | Breadcurmb      |
| チェックボックス   | Checkbox        |
| ドロップダウン    | Dropdown        |
| ドロップゾーン    | Dropzone        |
| フィルターグループ  | FilterGroup     |
| イメージプレビュー  | ImagePreview    |
| インプットイメージ  | InputImages     |

# Organismsの実装

Organismsは、サインインフォームやヘッダーなどのより具体的なUIコンポーネント
ここではドメイン知識に依存したデータを受け取ったり、コンテキストを参照したり、
独自の振る舞いを持つことができる.

- src/components/molecules

| コンポーネント    | 関数コンポーネント名          |
|------------|---------------------|
| カート商品      | CartProduct         |
| フッター       | Footer              |
| グローバルスピナー  | GlobalSpinner       |
| ヘッダー       | Header              |
| 商品カード      | ProductCard         |
| 商品カードカルーセル | ProductCardCarousel |
| 商品カードリスト   | ProductCardList     |
| 商品投稿フォーム   | ProductForm         |
| サインインフォーム  | SigninForm          |
| ユーザープロファイル | UserProfile         |

# Templatesの実装

## レイアウト (Layoutコンポーネント)

Layoutコンポーネントは主にHeaderとFooterコンポーネントとメインコンテンツchildrenで構成される。
ヘッダーの種類を変えたい場合など違うレイアウトのページを作成したい場合は複数のTemplatesを用意する。

| ページ       | 
|-----------|
| サインインページ  | 
| ユーザーページ   |
| トップページ    |
| 検索ページ     |
| 商品詳細ページ   |
| 買い物カートページ |
| 出品ページ     |

### Presentational Component

Atomos/Molecules/Organisms/Templateは、Presentational Componentに属する. 

### Container Component

Hooksを持たせて、状態を使って表示内容を切り替える、
APIコールなどの副作用を実行するなどの振る舞いを実装する。
また、コンテキストを参照し、Presentational Componentへ表示に必要なデータを渡す

Container Componentを用いることで、ページを実装する上でコードが複雑化することを防ぐことが可能。

ページをPresentational ComponentとContainer Componentを組み合わせながら実装する.

## サインインページ

ビジネスロジック：Container Componentの SigninFormContainerに実装されている

Container ComponentのSigninFormContainerは、SigninFormに対してユーザー・パスワード入力情報から
認証APIをコールし、結果はonSigninイベントハンドラに返される。
認証成功後はトップページにリダイレクトするか、クエリパラメータのredirect_toがある場合には、
指定のページにリダレイクとされる。

リダイレクトには、next/routerのrouter.pusを使用する。

## ユーザーページ

このページはユーザー情報とユーザーが投稿した商品リストを表示する

ビジネスロジック：Container ComponentのSigninFormContainerとUserProductCardListContainerにて実装

UserPageは、ユーザー名を変更などによって動的にコンテンツが変更される可能性があるため、
getStaticPropsに、revalidateを設定する。
10秒間で静的ページのキャッシュがstate(最新でない状態)となり、バックエンド側でページを
インクリメンタル静的再生成(ISR)する。
なお、この改善をしても、10秒間は最新でないコンテンツが表示される可能性がある。
(UserPagePropsが更新によって最新でないデータが渡されてくる可能性がある.)
そこで、ページを一度表示した後に、クライアントサイドから最新の情報を取得し、
表示するコンテンツを上書きする。こうすることで、ある程度強整合性を担保でき、
万が一、静的ページのキャッシュが10秒間の間に古くなっていても常に最新の情報を表示できる。

## トップページ

HomePageは、商品の情報の変更などによって動的にコンテンツが変更される可能性があるため、
getStaticPropsに、revalidateを設定する。
しかしトップページの情報はユーザーページのような強整合性は求められていないため、
60秒間キャッシュを有効にしておく。
60秒間で静的ページのキャッシュがstate(最新でない)状態となり、バックエンド側で
ページをインクリメンタル静的再生成(ISR)する。
各ページにおいてデータの整合性に関するユースケースは異なるので、キャッシュ時間は柔軟に
変更すること。

## 検索ページ

このページはさまざまな検索クエリに対して一致する商品のリストを表示する。

ビジネスロジック： 商品カードリストで表示するビジネスロジックは主に、Container Componentの
                ProductCardListContainerで実装される。

実装方針：
さまざまなクエリに応じて静的ページを用意するのは難しいため、
クライアントサイドで検索結果を取得する。
Container ComponentのProductCardListContainerは検索クエリ(選択した商品カテゴリ、
商品の状態)から商品カードリストを表示する。

また、pages/search/[[...slug]].tsxのファイル名は、
/search以下のすべてのパスへのリクエストを受けるために書く。
たとえば、search, search/hookの両方のパスにマッチする。
そして、search/hookのリクエストに対して、router.query.slugには、
{"slug": ['book'] } のオブジェクトが指定される。

## 商品詳細ページ

このページは、商品の詳細情報(投稿者、商品画像、商品名等)を表示する。
また、カートに追加ボタンから商品を保存できる。

このページは動的にコンテンツが変更される可能性があるため、getStaticPropsには
revalidateを設定する。

静的ページのキャッシュの考えは、ユーザーページと同じにする。

インクリメンタル静的再生成で表示したコンテンツに対して、クライアントサイドで、
useProductのカスタムフックを使用して最新の情報を取得し、表示するコンテンツを上書きする。

ビジネスロジック：Container ComponentのAddToCartButtonContainer。カートに追加ボタンを押下した時に、ShoppingCartContextに商品を追加する機能を持つ

## 買い物カートページ

このページはカートに追加された商品を表示、購入、削除できる。

ビジネスロジック：Container ComponentのCartContainerで実装される

CartContainerは、カートの中のある商品を表示、購入、削除する。
useAuthGuardのカスタムフックは認証ガードとして、認証していないユーザーを
このページに到達しないように利用する。

## 出品ページ

このページは、商品情報を入力し、新たに商品を投稿する機能が実装される。

ビジネスロジック：Container ComponentのProductFormContainerで実装される。

Container ComponentのProductFormContainerは、商品情報を入力し、
プロダクトAPIを通じて商品を保存する。

# コンポーネントのユニットテストの実装

- React Testing Libraryで、Atoms、Molecules、Organismsのユニットテストを書く。

## ボタンのユニットテスト

- src/components/atoms/Button/index.spec.tsx

1.beforeEach内で、Jestのモック関数を使ってhandleClickを生成
2.render関数でButtonコンポーネントをレンダリングする
3.handleClickをButtonのonClickに渡す

テストケース：ボタンを押下した時に、onClickが呼ばれる
=>fireEvent.clickでボタンを押下した時に、handleClickが呼ばれている事を確認する
    また、レンダリングされたButtonの要素は、screen.getByText('Button')で取得する。

## ドロップダウンのユニットテスト

- src/components/molecules/Dropdown/index.ts

テストコードを書く前に、data-testid属性をドロップダウンコンポーネントの子要素に
追加する。これにより、指定の要素を取得して、テストコードからコンポーネントを操作できる。


- src/components/molecules/Dropdown/index.spec.tsx

## ドロップゾーンのユニットテスト

- src/components/molecules/Dropzone/index.ts
- src/components/molecules/Dropzone/index.spec.tsx

## ヘッダーのユニットテスト

- src/components/organisms/Header/index.spec.tsx

## サインインフォームのユニットテスト

- src/components/organisms/SigninForm/index.spec.tsx

## 商品投稿フォームのユニットテスト

- src/components/organisms/ProductForm/index.spec.tsx

# リリースと改善

- HerokuとVercelを使ったアプリケーションデプロイ
- ロギング
- SEO対策
- アクセシビリティ
- セキュリティ




Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
