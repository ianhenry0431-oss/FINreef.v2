import SwiftUI

@main
struct Finreefv2App: App {
    @StateObject private var progressStore = ProgressStore()

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(progressStore)
        }
    }
}
