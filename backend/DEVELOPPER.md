## Directory Structure

/src
  /domain
    /entities
      User.ts            // ユーザーエンティティ（名前、メールアドレス、パスワードなどの属性を持つ）
      Eatery.ts      // 飲食店エンティティ（名前、住所、カテゴリなどの属性を持つ）
      EateryReview.ts          // レビューエンティティ（レビュー内容、評価、投稿者などの属性を持つ）
    /valueObjects
      Email.ts           // メール値オブジェクト（メールアドレスのバリデーションなど）
      Rating.ts          // 評価値オブジェクト（評価スコアの範囲など）
    /repositories
      IUserRepository.ts  // ユーザーリポジトリインターフェース
      IEateryRepository.ts  // 飲食店リポジトリインターフェース
      IReviewRepository.ts  // レビューリポジトリインターフェース
    /services
      UserService.ts      // ユーザードメインサービス
      EateryService.ts // 飲食店ドメインサービス
    /events
      EateryAddedEvent.ts // 飲食店追加イベント
      ReviewAddedEvent.ts     // レビュー追加イベント

アプリケーション層
  /application
    /services
      UserApplicationService.ts   // ユーザーアプリケーションサービス
      EateryApplicationService.ts // 飲食店アプリケーションサービス
      ReviewApplicationService.ts    // レビューアプリケーションサービス
    /dto
      UserDTO.ts                  // ユーザーデータ転送オブジェクト
      EateryDTO.ts            // 飲食店データ転送オブジェクト
      ReviewDTO.ts                // レビューデータ転送オブジェクト
    /commands
      AddEateryCommand.ts     // 飲食店追加コマンド
      AddReviewCommand.ts         // レビュー追加コマンド
    /queries
      GetEateryQuery.ts       // 飲食店取得クエリ
      GetUserQuery.ts             // ユーザー取得クエリ
    /handlers
      AddEateryHandler.ts     // 飲食店追加ハンドラ
      AddReviewHandler.ts         // レビュー追加ハンドラ

インフラストラクチャ層
  /infrastructure
    /repositories
      UserRepository.ts           // ユーザーリポジトリの具体的な実装
      EateryRepository.ts     // 飲食店リポジトリの具体的な実装
      ReviewRepository.ts         // レビューリポジトリの具体的な実装
    /persistence
      DatabaseConnection.ts       // データベース接続設定
    /api
      ExternalEateryService.ts // 外部飲食店サービス
    /config
      AppConfig.ts                // アプリケーション設定
    /services
      NotificationService.ts      // 通知サービス（例：レビュー追加通知）

インターフェース層（プレゼンテーション層）
  /interface
    /controllers
      UserController.ts           // ユーザーコントローラー
      EateryController.ts     // 飲食店コントローラー
      ReviewController.ts         // レビューコントローラー
    /views
      EateryView.ts           // 飲食店ビュー
      ReviewView.ts               // レビュービュー
    /dto
      UserRequestDTO.ts           // ユーザーリクエストDTO
      UserResponseDTO.ts          // ユーザーレスポンスDTO
      EateryRequestDTO.ts     // 飲食店リクエストDTO
      EateryResponseDTO.ts    // 飲食店レスポンスDTO
      ReviewRequestDTO.ts         // レビューリクエストDTO
      ReviewResponseDTO.ts        // レビューレスポンスDTO

共通層
  /shared
    /utils
      DateUtils.ts                // 日付ユーティリティ
      ValidationUtils.ts          // バリデーションユーティリティ
    /exceptions
      NotFoundException.ts        // 例外クラス（エンティティが見つからない場合）
      ValidationException.ts      // 例外クラス（バリデーションエラーの場合）
    /constants
      AppConstants.ts             // アプリケーション定数
